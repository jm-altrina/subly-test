import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MediaProvider } from './contexts/MediaContext';
import { FilterProvider } from './contexts/FilterContext';

// Creating the root element and rendering the app within the context providers
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Wrapping the entire app with global context providers */}
    <MediaProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </MediaProvider>
  </React.StrictMode>
);

// For performance monitoring
reportWebVitals();