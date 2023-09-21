import { FC, useCallback, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Arrow } from '../components/Arrow';
import gallerySlice from '../redux/gallery';
import { getPhotos } from '../redux/selector';
import { RootState } from '../redux/store';

type GalleryProps = {
  pending?: boolean;
};

export const Gallery: FC<GalleryProps> = ({ pending = false }) => {
  const dispatch = useDispatch();
  const photos = useSelector(getPhotos);
  const activeIndex = useSelector((state: RootState) => state.gallery.activeIndex);

  const photoToDisplay = photos?.[activeIndex];
  const sizeOfPhotos = photos?.length;

  const prevPhoto = useCallback(() => {
    const newIndex = activeIndex - 1 < 0 ? sizeOfPhotos - 1 : (activeIndex - 1) % sizeOfPhotos;

    // Use New View Transition API
    document.startViewTransition(() => {
      flushSync(() => {
        dispatch(gallerySlice.actions.setActiveIndex(newIndex));
      });
    });
  }, [sizeOfPhotos, dispatch, activeIndex]);

  const nextPhoto = useCallback(() => {
    const newIndex = activeIndex + 1 < 0 ? sizeOfPhotos - 1 : (activeIndex + 1) % sizeOfPhotos;

    // Use New View Transition API
    document.startViewTransition(() => {
      flushSync(() => {
        dispatch(gallerySlice.actions.setActiveIndex(newIndex));
      });
    });
  }, [sizeOfPhotos, dispatch, activeIndex]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
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
  }, [handleKeyDown]);

  if (pending) {
    return <div>Loading...</div>;
  }

  if (photoToDisplay) {
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
            <h1 style={styles.short} title={photoToDisplay?.description}>
              {photoToDisplay?.description || 'Title'}
            </h1>
            <p style={styles.short}>{photoToDisplay?.alt_description || 'Description'}</p>
          </div>
        </div>
        <button className="gallery-button" onClick={nextPhoto}>
          <Arrow right />
        </button>
      </div>
    );
  }
  return null;
};

const styles: { [x: string]: React.CSSProperties } = {
  short: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};
