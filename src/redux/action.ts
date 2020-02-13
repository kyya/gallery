import { ActivateIndexAction } from './types';

export const ACTIVATE_INDEX = 'ACTIVATE_INDEX';
export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export function setActiveIndex(index = 0): ActivateIndexAction {
  return { type: ACTIVATE_INDEX, payload: index };
}
