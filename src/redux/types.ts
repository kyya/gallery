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

