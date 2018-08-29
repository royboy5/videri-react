import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPhotos, fetchVideos } from '../actions';

import PageHeader from './PageHeader';
import ContentItem from './ContentItem';
import Popup from './Popup';

import { getDate, getFilename } from '../utils/getInfo';
import { sortByPhotoName, sortByVideoName } from '../utils/sortBy';

class ContentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openPopup: false,
      item: {
        filename: '',
        url: '',
      },
    };

    this.sortHandler = this.sortHandler.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.showPopup = this.showPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);

    const { match } = this.props;
    const { id } = match.params;

    this.id = id;

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

  showPopup(item) {
    this.setState({
      openPopup: true,
      item: { ...item },
    });
  }

  closePopup() {
    this.setState({
      openPopup: false,
    });
  }

  renderItems() {
    const { photos, videos } = this.props;

    let items;
    let sortBy;

    if (this.isPhotos) {
      items = photos;
      sortBy = sortByPhotoName;
    } else {
      items = videos;
      sortBy = sortByVideoName;
    }

    return items[this.id].hits.sort(sortBy).map((item) => {
      let id;
      let image;
      let date;
      let filename;
      let res;
      let url;

      if (this.isPhotos) {
        const { id: itemId } = item;
        id = itemId;
        date = getDate(item.previewURL);
        filename = getFilename(item.previewURL);
        image = item.previewURL;
        res = `${item.imageWidth} x ${item.imageHeight}`;
        url = item.largeImageURL;
      } else {
        id = item.picture_id;
        filename = getFilename(item.videos.medium.url);
        res = `${item.videos.medium.width} x ${item.videos.medium.height}`;
        url = `${item.videos.medium.url}`;

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
          onClick={() => this.showPopup({ filename, url, isPhoto: this.isPhotos })}
        />
      );
    });
  }

  render() {
    const { history, photos, videos } = this.props;

    const { openPopup, item } = this.state;

    if ((this.isPhotos && _.isEmpty(photos)) || (!this.isPhotos && _.isEmpty(videos))) {
      return <div>Loading</div>;
    }

    return (
      <div style={openPopup ? { filter: 'blur(4px)', WebkitFilter: 'blur(4px)' } : {}}>
        <PageHeader title={this.id} sortHandler={this.sortHandler} back={history.goBack} />
        <div className="content-list">{this.renderItems()}</div>
        <Popup showPopup={openPopup} closePopup={this.closePopup} content={item} />
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
