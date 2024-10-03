import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MediaList from './MediaList';  // Correctly import MediaList
import { MediaContext } from '../../contexts/MediaContext';
import { mockMedia } from '../../__mocks__/mockData';  // Import centralized mock data

// Test with direct context consumption
test('renders media list with data', async () => {
  const mockValue = {
    media: mockMedia,
    loading: false,
    error: null,
  };

  // Wrap MediaList with the actual MediaContext.Provider using the mock values
  render(
    <MediaContext.Provider value={mockValue}>
      <MediaList />
    </MediaContext.Provider>
  );

  // Wait for the media to be rendered
  await waitFor(() => {
    expect(screen.getByText('Test Media 1')).toBeInTheDocument();
    expect(screen.getByText('Test Media 2')).toBeInTheDocument();
  }, { timeout: 3000 });
});