import React, { FunctionComponent, useEffect, KeyboardEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveIndex } from '../redux/action';
import { GalleryState } from '../redux/types';
import { Arrow } from '../components/Arrow';

export const Gallery: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { activeIndex, listOfPhotos } = useSelector((state: GalleryState) => state);
  const lengthOfPhotos = listOfPhotos.length;
  const photoToDisplay = listOfPhotos[activeIndex] || null;

  function handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === "ArrowRight") {
      nextPhoto();
    } else if (ev.key === "ArrowLeft") {
      prevPhoto();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown as any);
    return () => document.removeEventListener('keydown', handleKeyDown as any);
  })

  function nextPhoto() {
    const newIndex = (activeIndex + 1) < 0 ? lengthOfPhotos - 1 : (activeIndex + 1) % lengthOfPhotos;
    dispatch(setActiveIndex(newIndex));
  }

  function prevPhoto() {
    const newIndex = (activeIndex - 1) < 0 ? lengthOfPhotos - 1 : (activeIndex - 1) % lengthOfPhotos;
    dispatch(setActiveIndex(newIndex));
  }

  if (!photoToDisplay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery">
      <button className="gallery-button" onClick={prevPhoto}><Arrow /></button>
      <div className="gallery-main" style={{ backgroundImage: `url(${photoToDisplay.urls.regular})`}}>
        <div className="gallery-meta">
          <h1>{photoToDisplay.description || 'Title'}</h1>
          <p>{photoToDisplay.alt_description || 'Description'}</p>
        </div>
      </div>
      <button className="gallery-button" onClick={nextPhoto}><Arrow right /></button>
    </div>
  )
}
