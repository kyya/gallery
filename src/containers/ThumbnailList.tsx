import React, { FunctionComponent, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveIndex, getUserLikedPhotos } from '../redux/action';
import { GalleryState } from '../redux/types';
import { Thumbnail } from '../components/Thumbnail';

const SCROLL_DURATION = 7;

export const ThumbnailList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { data: photos, pending } = useSelector((state: GalleryState) => state.photos);
  const activeIndex = useSelector((state: GalleryState) => state.root.activeIndex);

  useEffect(() => {
    dispatch(getUserLikedPhotos('kyya'));
  }, [dispatch]);

  const ref = useRef<HTMLDivElement>(null);

  function handleWheel(ev: any) {
    if (ref.current) {
      ref.current.scrollLeft += ev.deltaY / SCROLL_DURATION;
    }
  }

  if (pending) {
    return <div>Nothing...</div>;
  }

  return (
    <div className="thumbnails" ref={ref} onWheel={handleWheel}>
      <div className="thumbnails-container">
        {photos?.map((photo, index) => (
          <Thumbnail
            key={index}
            isActive={index === activeIndex}
            src={photo.urls.thumb}
            onClick={() => dispatch(setActiveIndex(index))}
          />
        ))}
      </div>
    </div>
  );
};
