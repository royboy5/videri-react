export const SORT_TYPE = {
  NONE: 0,
  NAME: 1,
  NAME_REV: 2,
};

export const sortByWordCount = (a, b) => a.words - b.words;
export const sortByWordCountRev = (a, b) => b.words - a.words;
export const sortBySubmitted = (a, b) => {
  //   console.log('sortBySubmitted', a.publish_at, b.publish_at)
  if (a.publish_at > b.publish_at) {
    return 1;
  }
  if (a.publish_at < b.publish_at) {
    return -1;
  }
  return 0;
};

export const sortBySubmittedRev = (a, b) => {
  //   console.log('sortBySubmittedRev', a.publish_at, b.publish_at)
  if (a.publish_at < b.publish_at) {
    return 1;
  }
  if (a.publish_at > b.publish_at) {
    return -1;
  }
  return 0;
};
