
import axios, { AxiosInstance } from 'axios';
import { Photo } from '../redux/types';

const createAxiosInstance = (API_KEY: string) => {
  return axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization: `Client-ID ${API_KEY}`
    },
  });
}

class UnsplashClient {
  constructor(private client: AxiosInstance) {}

  getUserLikedPhotos(username: string) {
    return this.client.get(`/users/${username}/likes?per_page=100`);
  }

  getCollectionPhotos(id: string) {
    return this.client.get<Photo[]>(`/collections/${id}/photos?per_page=1000`).then(res => res.data);
  }
}

export default new UnsplashClient(createAxiosInstance(import.meta.env.VITE_UNSPLASH_API_KEY));