import { getFilename } from './getInfo';

export const SORT_TYPE = {
  NONE: 0,
  NAME_PHOTO: 1,
  NAME_VIDEO: 2,
};

export const sortByPhotoName = (a, b) => {
  const nameA = getFilename(a.previewURL.toUpperCase());
  const nameB = getFilename(b.previewURL.toUpperCase());

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
};
export const sortByVideoName = (a, b) => {
  const nameA = getFilename(a.videos.medium.url.toUpperCase());
  const nameB = getFilename(b.videos.medium.url.toUpperCase());

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
};
