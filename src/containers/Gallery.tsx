import React, { FunctionComponent, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveIndex } from '../redux/action';
import { GalleryState } from '../redux/types';
import { Arrow } from '../components/Arrow';

export const Gallery: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { data: photos, pending } = useSelector((state: GalleryState) => state.photos);

  const activeIndex = useSelector((state: GalleryState) => state.root.activeIndex);
  const photoToDisplay = photos?.[activeIndex];
  const sizeOfPhotos = photos?.length;

  const prevPhoto = useCallback(() => {
    const newIndex = activeIndex - 1 < 0 ? sizeOfPhotos - 1 : (activeIndex - 1) % sizeOfPhotos;
    dispatch(setActiveIndex(newIndex));
  }, [sizeOfPhotos, dispatch, activeIndex]);

  const nextPhoto = useCallback(() => {
    const newIndex = activeIndex + 1 < 0 ? sizeOfPhotos - 1 : (activeIndex + 1) % sizeOfPhotos;
    dispatch(setActiveIndex(newIndex));
  }, [sizeOfPhotos, dispatch, activeIndex]);

  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'ArrowLeft') {
        prevPhoto();
      } else if (event.key === 'ArrowRight') {
        nextPhoto();
      }
    },
    [prevPhoto, nextPhoto],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (pending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery">
      <button className="gallery-button" onClick={prevPhoto}>
        <Arrow />
      </button>
      <div
        className="gallery-main"
        style={{ backgroundImage: `url(${photoToDisplay?.urls.regular})` }}
      >
        <div className="gallery-meta">
          <h1>{photoToDisplay?.description || 'Title'}</h1>
          <p>{photoToDisplay?.alt_description || 'Description'}</p>
        </div>
      </div>
      <button className="gallery-button" onClick={nextPhoto}>
        <Arrow right />
      </button>
    </div>
  );
};
