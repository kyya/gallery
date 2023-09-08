import { map, range } from 'lodash';
import { FC } from 'react';

type Props = {
  count?: number;
}

export const ListPlaceholder: FC<Props> = ({ count = 32 }) => {
  return (
    <div className="thumbnails">
      <div className="thumbnails-container">
        {map(range(0, count), (index) => (
          <div key={index} className="thumbnail">
            <div style={{ display: 'flex', flex: 1, backgroundColor: '#EBEBEB' }} />
          </div>
        ))}
      </div>
    </div>
  );
};
