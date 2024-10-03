import { Media } from '../types';

export const mockMedia: Media[] = [
  {
    id: '1',
    name: 'Test Media 1',
    cover: 'test-cover-url-1.jpg',
    category: 'Test Category',
    status: 'ready',
    createdAt: '2022-01-01',
    languages: ['English', 'Spanish'],
    updatedAt: '2022-01-02'
  },
  {
    id: '2',
    name: 'Test Media 2',
    cover: 'test-cover-url-2.jpg',
    category: 'Test Category',
    status: 'ready',
    createdAt: '2022-01-02',
    languages: ['English'],
    updatedAt: '2022-01-03'
  },
];