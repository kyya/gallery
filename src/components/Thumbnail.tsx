import React, { FunctionComponent } from 'react';

interface ThumbnailProps {
  src: string;
  active: boolean;
  onClick: any;
}

export const Thumbnail: FunctionComponent<ThumbnailProps> = ({ src, active, onClick }) => {
  return (
    <div onClick={onClick} className={`thumbnail ${active ? 'active' : ''}`}>
      <div style={{ backgroundImage: `url(${src})` }}></div>
    </div>
  );
};
