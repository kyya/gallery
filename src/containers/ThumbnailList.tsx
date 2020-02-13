import React, { FunctionComponent, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos, setActiveIndex } from '../redux/action'
import { GalleryState } from '../redux/types';
import { Thumbnail } from '../components/Thumbnail';

const SCROLL_DURATION = 7;

export const ThumbnailList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { listOfPhotos, activeIndex } = useSelector((state: GalleryState) => state);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const ref = useRef<HTMLDivElement>(null);

  function handleWheel(ev: any) {
    if (ref.current) {
      ref.current.scrollLeft += ev.deltaY / SCROLL_DURATION;
    }
  }

  if (listOfPhotos.length === 0) {
    return <div>Nothing...</div>;
  }

  return (
    <div className="thumbnails" ref={ref} onWheel={handleWheel}>
      <div className="thumbnails-container">
        {listOfPhotos.map(
          (photo, index) => (
            <Thumbnail key={index}
              isActive={index === activeIndex}
              src={photo.urls.thumb}
              onClick={() => dispatch(setActiveIndex(index))}
            />)
        )}
      </div>
    </div>
  )
}
