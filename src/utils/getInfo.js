// expects a string
// userImageURL: https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg
// previewURL: https://cdn.pixabay.com/photo/2014/05/03/00/42/vw-camper-336606_150.jpg
export const getDate = (url) => {
  const pattern = /\/\d{4}\/\d{2}\/\d{2}/;

  const date = url.match(pattern)[0].split('/');

  const [, year, month, day] = date;

  return `/${year}/${month}/${day}`;
};

// expects a string
// userImageURL: https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg
// previewURL: https://cdn.pixabay.com/photo/2014/05/03/00/42/vw-camper-336606_150.jpg
export const getFilename = (url) => {
  const pattern = /([0-9a-zA-Z._-]+.(png|PNG|gif|GIF|jp[e]?g|JP[E]?G|mp4|MP4))/;

  const filename = url.match(pattern)[0];

  return filename;
};
