export interface Photo {
  urls: {
    regular: string;
    thumb: string;
  };
  links?: {
    html: string;
  }
  description: string;
  alt_description: string;
}

export interface GalleryState {
  root: {
    activeIndex: number;
  };
  photos: {
    data: Photo[];
    pending: boolean;
  };
}

export interface ActivateIndexAction {
  type: string;
  payload: number;
}
