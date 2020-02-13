import { ACTIVATE_INDEX, FETCH_PHOTOS_SUCCESS } from './action';
import { GalleryState } from './types';

const initialState: GalleryState = {
  activeIndex: 0,
  listOfPhotos: [],
}

export default function root(state = initialState, action: any) {
  switch (action.type) {
    case ACTIVATE_INDEX:
      return { ...state, activeIndex: action.payload };
    case FETCH_PHOTOS_SUCCESS:
      return { ...state, listOfPhotos: action.payload };
    default:
      return state;
  }
}
