import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Media } from '../types';
import mediaService from '../services/mediaService';

interface MediaContextProps {
  media: Media[];
  loading: boolean;
  error: string | null;
}

// Creating context for managing media data across the app
export const MediaContext = createContext<MediaContextProps>({
  media: [],
  loading: true,
  error: null,
});

interface MediaProviderProps {
  children: ReactNode;
}

// MediaProvider component to provide media data to its children
export const MediaProvider: React.FC<MediaProviderProps> = ({ children }) => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Fetch media data when the component mounts
    const fetchMedia = async () => {
      try {
        const data = await mediaService.fetchMedia();
        if (isMounted) {
          setMedia(data);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || 'Failed to fetch media.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchMedia();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <MediaContext.Provider value={{ media, loading, error }}>
      {children}
    </MediaContext.Provider>
  );
};