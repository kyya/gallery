import { Gallery } from './containers/Gallery';
import { ThumbnailList } from './containers/ThumbnailList';

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Gallery />
        <ThumbnailList />
      </div>
    </div>
  );
};
