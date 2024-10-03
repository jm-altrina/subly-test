import { Media } from '../types';

const API_URL = 'https://faas-lon1-917a94a7.doserverless.co/api/v1/web/fn-1b71c7db-c787-49ea-afbf-d96b9d136565/default/subly-test-endpoint'; // API endpoint

// Function to fetch media data from the API
const fetchMedia = async (): Promise<Media[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    // Throw an error if the response is not successful
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  // Parse the response data into an array of Media objects
  const data: Media[] = await response.json();
  return data;
};

const mediaService = {
  fetchMedia,
};

export default mediaService;