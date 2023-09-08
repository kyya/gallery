import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ListPlaceholder } from '../components/ListPlaceholder';
import { Thumbnail } from '../components/Thumbnail';
import unsplashClient from '../misc/unsplash.client';
import gallerySlice from '../redux/gallery';
import { getActivePhotoIndex, getPhotos } from '../redux/selector';

export const ThumbnailList: FC = () => {
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();
  const photos = useSelector(getPhotos);
  const activeIndex = useSelector(getActivePhotoIndex);

  useEffect(() => {
    setPending(true);
    unsplashClient.getCollectionPhotos('4690903').then((photos) => {
      dispatch(gallerySlice.actions.setCollectionsPhotos(photos));
    }).finally(() => setPending(false));
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
            onClick={() => window.open(photo?.links?.html)}
          />
        ))}
      </div>
    </div>
  );
};
