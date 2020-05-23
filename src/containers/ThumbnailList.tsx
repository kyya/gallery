import React, { FunctionComponent, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveIndex, getCollectionsPhotos } from '../redux/action';
import { getPhotos, getActivePhotoIndex } from '../redux/selector';
import { Thumbnail } from '../components/Thumbnail';
import { ListPlaceholder } from '../components/ListPlaceholder';

export const ThumbnailList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { data: photos, pending } = useSelector(getPhotos);
  const activeIndex = useSelector(getActivePhotoIndex);

  useEffect(() => {
    dispatch(getCollectionsPhotos('4690903'));
  }, [dispatch]);

  if (pending) {
    return <ListPlaceholder />;
  }

  return (
    <div className="thumbnails">
      <div className="thumbnails-container">
        {photos?.map((photo, index) => (
          <Thumbnail
            key={index}
            active={index === activeIndex}
            src={photo.urls.thumb}
            onClick={() => null}
          />
        ))}
      </div>
    </div>
  );
};
