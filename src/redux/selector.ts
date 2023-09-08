import { RootState } from './store';

export const getPhotos = (state: RootState) => state.gallery.photos;
export const getActivePhotoIndex = (state: RootState) => state.gallery.activeIndex;
