import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Photo } from './types';

export interface GalleryState {
  activeIndex: number;
  photos: Photo[];
}

const initialState: GalleryState = {
  activeIndex: 0,
  photos: [],
};

export default createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
    },
    setCollectionsPhotos: (state, action: PayloadAction<Photo[]>) => {
      state.photos = action.payload;
    },
  },
});
