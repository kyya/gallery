import { Dispatch } from 'redux';
import { Photo, ActivateIndexAction } from './types';
import { getRandomPhotos } from '../utils/request';

export const ACTIVATE_INDEX = 'ACTIVATE_INDEX';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export function setActiveIndex(index = 0): ActivateIndexAction {
  return { type: ACTIVATE_INDEX, payload: index };
}

export function fetchPhotos() {
  return (dispatch: Dispatch) => {
    const stringOfPhotos = window.localStorage.getItem('photos');
    if (stringOfPhotos) {
      const listOfPhotos = JSON.parse(stringOfPhotos);
      dispatch({ type: FETCH_PHOTOS, payload: listOfPhotos });
      console.log('Using LocalStorage\'s Photos: ', listOfPhotos.length);
    } else {
      getRandomPhotos()
        .then((response: Photo[]) => {
          window.localStorage.setItem('photos', JSON.stringify(response));
          dispatch({ type: FETCH_PHOTOS, payload: response });
        });
    }
  };
}
