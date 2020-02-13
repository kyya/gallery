export interface Photo {
  urls: {
    regular: string
    thumb: string
  }
  description: string
  alt_description: string
}

export interface GalleryState {
  activeIndex: number
  listOfPhotos: Photo[]
}

export interface ActivateIndexAction {
  type: string
  payload: number
}
