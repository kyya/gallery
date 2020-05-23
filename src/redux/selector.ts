import { GalleryState } from './types';

export const getPhotos = (state: GalleryState) => state.photos;
export const getActivePhotoIndex = (state: GalleryState) => state.root.activeIndex;
