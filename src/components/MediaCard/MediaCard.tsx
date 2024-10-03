import React, { useState } from 'react';
import { Media } from '../../types';  // Importing Media type definition
import Modal from '../Modal/Modal';  // Importing  Modal component
import './MediaCard.css';  // Importing CSS for styling  media card
import placeholderImage from '../../assets/placeholder.svg';  // Placeholder image for error or transcribing status
import ErrorMessage from '../ErrorMessage/ErrorMessage';  // Component for handling errors


interface MediaCardProps {
    media: Media; // Defining  expected props for MediaCard component
}

// MediaCard component displays details of a single media item
const MediaCard: React.FC<MediaCardProps> = ({ media }) => {
    // State to track if image has loaded
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

    // Destructuring media properties
    const { name, cover, status, updatedAt, languages } = media;

    // State to track if modal is open
    const [showModal, setShowModal] = useState<boolean>(false);

    // Event handler to show  modal when  edit button is clicked
    const handleEditClick = () => {
        setShowModal(true);
    };

    // Event handler to update  image loading state
    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    // Set  initial image source and alt text based on  media status
    const initialImageSrc =
        status === 'error' || status === 'transcribing' ? placeholderImage : cover;

    const initialAltText =
        status === 'error' || status === 'transcribing'
            ? 'Placeholder image: content not available'
            : `Cover of ${name}`;

    const [imageSrc, setImageSrc] = useState<string>(initialImageSrc);
    const [altText, setAltText] = useState<string>(initialAltText);

    const handleImageError = () => {
        setImageSrc(placeholderImage);
        setIsImageLoaded(true); // Prevent infinite loading of a broken image
        setAltText('Placeholder image: cover not available');
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {/* Conditionally render  modal */}
            {showModal && (
                <Modal message="Feature Coming Soon!" onClose={handleCloseModal} />
            )}
            <article className="media-card">
                <div className="card-image">
                    {status === 'transcribing' && (
                        <div className="loading-overlay">Transcribing...</div>
                    )}
                    {/* Display a media cover image */}
                    {!isImageLoaded && (
                        <img
                            src={placeholderImage}
                            alt="Placeholder image: cover not available"
                            className="placeholder-image"
                        />
                    )}
                    <img
                        src={imageSrc}
                        alt={altText}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        className={`main-image ${isImageLoaded ? 'visible' : 'hidden'}`}
                        loading="lazy" /* Optional: Improves performance */
                    />
                    {/* Button to open  modal for media editing */}
                    {status === 'ready' && (
                        <button className="edit-button button-style-1" onClick={handleEditClick}>
                            Edit
                        </button>
                    )}
                </div>
                {/* Display media details */}
                <section className="card-content">
                    <h2 className="name">{name}</h2>
                    <p>Status: {status}</p>
                    <p>Last Edited: {new Date(updatedAt).toLocaleDateString()}</p>
                    {status === 'ready' && (
                        <p>{languages.length} languages available</p>
                    )}
                    {status === 'error' && (
                        <ErrorMessage message="An error occurred loading this media." className="small" />
                    )}
                </section>
            </article>
        </>
    );
};

export default React.memo(MediaCard);