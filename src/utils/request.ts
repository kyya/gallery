const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
const baseURL = 'https://api.unsplash.com';

const headers = { Authorization: `Client-ID ${API_KEY}` };

// console.log(`Ratelimit-Remaining: ${res.headers.get('X-Ratelimit-Remaining')}`);
export function getRandomPhotos(count = 20) {
  return fetch(`${baseURL}/photos/random?collections=4690903&count=${count}`, {
    headers,
  }).then((res) => res.json());
}

export function getPopularPhotos() {
  return fetch(`${baseURL}/photos`, { headers }).then((res) => res.json());
}
