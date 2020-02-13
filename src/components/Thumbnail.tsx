import React, { FunctionComponent } from 'react';

interface ThumbnailProps {
  src: string
  isActive: boolean
  onClick: any
}

export const Thumbnail: FunctionComponent<ThumbnailProps> = ({
  src,
  isActive,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={`thumbnail ${isActive?'active':''}`}>
      <div style={{ backgroundImage: `url(${src})` }}></div>
    </div>
  )
}
