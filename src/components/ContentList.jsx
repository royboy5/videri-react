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
      console.log(item, 'item');

      const date = getDate(item.previewURL);
      const filename = getFilename(item.previewURL);

      const [, year, month, day] = date;
      return (
        <ContentItem
          key={item.id}
          image={item.previewURL}
          title={filename}
          type={item.type}
          res={`${item.imageWidth} x ${item.imageHeight}`}
          date={`/${year}/${month}/${day}`}
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
