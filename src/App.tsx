import React from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import MediaList from './components/MediaList/MediaList';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Main App component that serves as the entry point for the UI
const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Media Dashboard</h1>
      {/* Error Boundary to catch JavaScript errors in the component tree and display 
      a fallback UI instead of crashing the entire application */}
      <ErrorBoundary>
        {/* FilterBar component to apply filters */}
        <FilterBar />
        {/* MediaList component to display media items */}
        <MediaList />
      </ErrorBoundary>
    </div>
  );
};

export default App;