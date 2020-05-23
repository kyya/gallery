import React, { FunctionComponent } from 'react';
import { map, range } from 'lodash';

export const ListPlaceholder: FunctionComponent<any> = ({ count = 32 }) => {
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
