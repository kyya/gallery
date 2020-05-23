import { ActivateIndexAction } from './types';

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
const headers = { Authorization: `Client-ID ${API_KEY}` };

export const ACTIVATE_INDEX = 'ACTIVATE_INDEX';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export const GET_USER_LIKED_PHOTOS = 'GET_USER_LIKED_PHOTOS';

export function setActiveIndex(index = 0): ActivateIndexAction {
  return { type: ACTIVATE_INDEX, payload: index };
}

export const requestPhotos = () => ({
  type: FETCH_PHOTOS,
  request: {
    headers,
    url: '/photos',
  },
});

export const getUserLikedPhotos = (username: string) => ({
  type: GET_USER_LIKED_PHOTOS,
  request: {
    headers,
    url: `/users/${username}/likes?per_page=100`
  }
})
