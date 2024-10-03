import React from 'react';
import { IoInfinite } from 'react-icons/io5'; // Importing a loading spinner icon from react-icons
import './LoadingBar.css'; // Importing CSS for styling  loading bar

// Interface for  LoadingBar component's props
interface LoadingBarProps {
    message?: string;  // Optional message prop that defaults to 'Loading...'
}

// LoadingBar component displays a loading icon and a message during data fetching
const LoadingBar: React.FC<LoadingBarProps> = ({ message = 'Loading...' }) => {
    return (
        <div className="loading-bar">
            {/* Infinite loop icon representing loading state */}
            <IoInfinite className="loading-icon" />
            {/* Display loading message passed as a prop */}
            <span className="loading-text">{message}</span>
        </div>
    );
};

export default LoadingBar;