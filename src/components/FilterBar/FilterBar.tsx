import React, { useMemo, useContext } from 'react';
import { MediaContext } from '../../contexts/MediaContext';  // Importing MediaContext for media data
import { FilterContext } from '../../contexts/FilterContext';  // Importing FilterContext for filter state management
import './FilterBar.css';  // Importing CSS for styling filter bar
import ErrorMessage from '../ErrorMessage/ErrorMessage';  // Component to handle error messages
import LoadingBar from '../LoadingBar/LoadingBar';  // Component to display a loading bar

const FilterBar: React.FC = () => {
  // Accessing filter state and methods from FilterContext
  const { filter, setFilter, resetFilter } = useContext(FilterContext);

  // Accessing media data, loading state, and error state from MediaContext
  const { media, loading, error } = useContext(MediaContext);

  // Memoizing unique statuses
  const uniqueStatuses = useMemo(() => {
    return Array.from(new Set(media.map((m) => m.status)));
  }, [media]);

  // Memoizing unique languages
  const uniqueLanguages = useMemo(() => {
    return Array.from(new Set(media.flatMap((m) => m.languages)));
  }, [media]);

  // Handler to update filter when status selection changes
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ status: e.target.value });
  };

  // Handler to update filter when language selection changes
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ language: e.target.value });
  };

  // Display loading bar while data is being fetched
  if (loading) return <LoadingBar message='Loading filters...'></LoadingBar>;

  // Display error message if data fetching fails
  if (error) return <ErrorMessage message="An error occurred loading filters." />;

  return (
    <nav className="filter-bar">
      {/* Status Filter Dropdown */}
      <label htmlFor="status-filter">Filter by Status:</label>
      <select
        id="status-filter"
        value={filter.status}
        onChange={handleStatusChange}
      >
        <option value="">All Statuses</option>
        {uniqueStatuses.map((status) => (
          <option key={status} value={status}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </option>
        ))}
      </select>

      {/* Language Filter Dropdown */}
      <label htmlFor="language-filter">Filter by Language:</label>
      <select
        id="language-filter"
        value={filter.language}
        onChange={handleLanguageChange}
      >
        <option value="">All Languages</option>
        {uniqueLanguages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>

      {/* Reset Filter Button */}
      <button onClick={resetFilter} className="reset-button button-style-1">
        Reset Filters
      </button>
    </nav>
  );
};

export default React.memo(FilterBar);