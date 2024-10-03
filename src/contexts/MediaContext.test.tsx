import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MediaContext, MediaProvider } from './MediaContext';
import { mockMedia } from '../__mocks__/mockData';  // Import centralized mock data

const TestComponent: React.FC = () => {
  const { media, loading, error } = React.useContext(MediaContext);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error: {error}</span>;
  return (
    <div>
      {media.map((item) => (
        <div key={item.id}>{item.name}</div> // Ensure each name is wrapped in a div
      ))}
    </div>
  );
};

describe('MediaContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('updates media after loading', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockMedia,
    });

    render(
      <MediaProvider>
        <TestComponent />
      </MediaProvider>
    );

    // Wait for media to be loaded
    await waitFor(() => {
      expect(screen.getByText(/Test Media 1/i)).toBeInTheDocument(); // Use regex to match text
      expect(screen.getByText(/Test Media 2/i)).toBeInTheDocument(); // Use regex to match text
    });
  });

  test('handles error state', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));

    render(
      <MediaProvider>
        <TestComponent />
      </MediaProvider>
    );

    // Wait for the error to appear
    await waitFor(() => {
      expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
    });
  });
});