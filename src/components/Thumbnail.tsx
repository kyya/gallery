import { FunctionComponent } from 'react';

interface ThumbnailProps {
  src: string;
  active?: boolean;
  onClick?: () => void;
}

export const Thumbnail: FunctionComponent<ThumbnailProps> = ({ src, active = false, onClick }) => {
  return (
    <div onClick={onClick} className={`thumbnail ${active ? 'active' : ''}`}>
      <div style={{ backgroundImage: `url(${src})` }}></div>
    </div>
  );
};
