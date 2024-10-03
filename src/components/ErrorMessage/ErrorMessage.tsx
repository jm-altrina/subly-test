import React from 'react';
import './ErrorMessage.css'; // Import corresponding CSS
import { FaExclamationTriangle } from 'react-icons/fa'; // Using react-icons for an error icon

interface ErrorMessageProps {
    message: string;
    // Optional prop to allow custom class names
    className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className = '' }) => {
    return (
        <div className={`error-message ${className}`} role="alert" aria-live="assertive">
            <FaExclamationTriangle className="error-icon" aria-hidden="true" />
            <span className="error-text">{message}</span>
        </div>
    );
};

export default ErrorMessage;