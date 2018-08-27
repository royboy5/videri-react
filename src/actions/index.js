import axios from 'axios';

export const FETCH_PHOTOS = 'fetch_photos';

const ROOT_URL = 'https://pixabay.com/api/';
const API_KEY = '?key=9915801-6d01ef1df0097cf53bbdd7663';

export function fetchPhotos(query) {
  const search = query.replace(/ /g, '+');
  const req = axios.get(`${ROOT_URL}${API_KEY}&q=${search}&per_page=50`);

  return {
    type: FETCH_PHOTOS,
    payload: req,
  };
}
