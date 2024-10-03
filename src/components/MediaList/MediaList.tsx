import React, { useContext, useMemo } from 'react';
import { MediaContext } from '../../contexts/MediaContext';  // Media context provides media data, loading, and error states
import { FilterContext } from '../../contexts/FilterContext';  // Filter context provides filters applied to media
import './MediaList.css';  // CSS for styling  media list
import ErrorMessage from '../ErrorMessage/ErrorMessage';  // Component for displaying error messages
import LoadingBar from '../LoadingBar/LoadingBar';  // Component for showing a loading indicator
import MediaCard from '../MediaCard/MediaCard'; // Component for showing media card

// MediaList component: Displays a list of media items based on  current filters
const MediaList: React.FC = () => {
  // Extracting media data, loading state, and error state from MediaContext
  const { media, loading, error } = useContext(MediaContext);
  
  // Extracting filter criteria from FilterContext
  const { filter } = useContext(FilterContext);

  // Memoizing filtered media list to avoid unnecessary recalculations on each render
  const filteredMedia = useMemo(() => {
    return media.filter((m) => {
      // Filtering media based on category, status, and language
      const categoryMatch = filter.category ? m.category === filter.category : true;
      const statusMatch = filter.status ? m.status === filter.status : true;
      const languageMatch = filter.language ? m.languages.includes(filter.language) : true;
      return categoryMatch && statusMatch && languageMatch;
    });
  }, [media, filter]);

  // If  data is still loading, show  loading bar
  if (loading) return <LoadingBar message='Loading media...'></LoadingBar>;

  // If an error occurs during data fetching, display an error message
  if (error) return <ErrorMessage message="An error occurred loading media list." />;

  // If there are no matching media items after filtering, display a message
  if (filteredMedia.length === 0) {
    return <p className="no-results">No media found matching  selected filters.</p>;
  }

  // Render list of filtered media items as MediaCard components
  return (
    <div className="media-list">
      {filteredMedia.map((medium) => (
        <MediaCard key={medium.id} media={medium} />
      ))}
    </div>
  );
};

export default React.memo(MediaList);