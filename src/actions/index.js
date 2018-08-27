import axios from 'axios';

export const FETCH_PHOTOS = 'fetch_photos';
export const FETCH_VIDEOS = 'fetch_videos';

const ROOT_URL = 'https://pixabay.com/api/';
const API_KEY = '?key=9915801-6d01ef1df0097cf53bbdd7663';

export async function fetchPhotos(query) {
  const search = query.replace(/ /g, '+');
  const req = await axios.get(`${ROOT_URL}${API_KEY}&q=${search}&per_page=50`);

  return {
    type: FETCH_PHOTOS,
    payload: {
      data: req.data,
      query,
    },
  };
}

export async function fetchVideos(query) {
  const search = query.replace(/ /g, '+');
  const req = await axios.get(`${ROOT_URL}videos/${API_KEY}&q=${search}&per_page=50`);

  return {
    type: FETCH_VIDEOS,
    payload: {
      data: req.data,
      query,
    },
  };
}
