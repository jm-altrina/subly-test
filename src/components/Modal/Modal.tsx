import React, { useEffect, useRef } from 'react';
import './Modal.css';

interface ModalProps {
    message: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // useEffect is used to move focus to the modal content when it mounts.
    useEffect(() => {
        // Move focus to the modal when it opens
        if (modalRef.current) {
            modalRef.current.focus();
        }

        // An event listener for keydown is added to close the modal when the Escape key is pressed.
        // Trap focus inside the modal
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            // Clean up the event listener when the modal is unmounted
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
            // role="dialog" and aria-modal="true" help screen readers understand the modal context.
            role="dialog"
            aria-modal="true"
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                // Makes the modal content focusable programmatically.
                tabIndex={-1}
                ref={modalRef}
            >
                <p>{message}</p>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;