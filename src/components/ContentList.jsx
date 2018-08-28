import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPhotos, fetchVideos } from '../actions';

import PageHeader from './PageHeader';
import ContentItem from './ContentItem';

import { getDate, getFilename } from '../utils/getInfo';

class ContentList extends Component {
  constructor(props) {
    super(props);

    this.sortHandler = this.sortHandler.bind(this);
    this.renderItems = this.renderItems.bind(this);

    const { match } = this.props;
    const { id } = match.params;

    this.id = id;

    console.log(this.props, 'props');
    this.isPhotos = match.url.includes('/content/photos');
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const { fetchPhotos: getPhotos, fetchVideos: getVideos } = this.props;

    if (this.isPhotos) {
      getPhotos(this.id);
    } else {
      console.log('got vids');
      getVideos(this.id);
    }
  }

  sortHandler() {
    console.log(this.props, 'clicked');
  }

  renderItems() {
    const { photos, videos } = this.props;

    let items;

    if (this.isPhotos) {
      items = photos;
    } else {
      items = videos;
    }

    // console.log(items[this.id].hits, 'items');

    return items[this.id].hits.sort().map((item) => {
      let id;
      let image;
      let date;
      let filename;
      let res;

      if (this.isPhotos) {
        const { id: itemId } = item;
        id = itemId;
        date = getDate(item.previewURL);
        filename = getFilename(item.previewURL);
        image = item.previewURL;
        res = `${item.imageWidth} x ${item.imageHeight}`;
      } else {
        id = item.picture_id;
        filename = getFilename(item.videos.medium.url);
        res = `${item.videos.medium.width} x ${item.videos.medium.height}`;

        if (!item.userImageURL) {
          date = '';
          image = 'https://via.placeholder.com/150x150?text=Empty';
        } else {
          image = item.userImageURL;
          date = getDate(item.userImageURL);
        }
      }

      return (
        <ContentItem
          key={id}
          image={image}
          title={filename}
          type={item.type}
          res={res}
          date={date}
        />
      );
    });
  }

  render() {
    const { history, photos, videos } = this.props;

    if ((this.isPhotos && _.isEmpty(photos)) || (!this.isPhotos && _.isEmpty(videos))) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <PageHeader title={this.id} sortHandler={this.sortHandler} back={history.goBack} />
        <div className="content-list">{this.renderItems()}</div>
      </div>
    );
  }
}

ContentList.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  photos: PropTypes.instanceOf(Object).isRequired,
  videos: PropTypes.instanceOf(Object).isRequired,
  fetchPhotos: PropTypes.func.isRequired,
  fetchVideos: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    photos: state.photos,
    videos: state.videos,
  };
}

export default connect(
  mapStateToProps,
  { fetchPhotos, fetchVideos },
)(ContentList);
