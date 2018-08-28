import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchVideos } from '../actions';

import PageHeader from '../components/PageHeader';
import Item from '../components/FolderItem';
import { getDate } from '../utils/getInfo';

class Videos extends Component {
  constructor(props) {
    super(props);

    this.renderFolders = this.renderFolders.bind(this);
    this.sortHandler = this.sortHandler.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const { fetchVideos: videos } = this.props;
    const search = ['extreme', 'sports', 'cars'];

    search.forEach((query) => {
      videos(query);
    });
  }

  sortHandler() {
    console.log(this.props, 'clicked');
  }

  renderFolders() {
    const { videos } = this.props;

    return Object.keys(videos)
      .sort()
      .map((item) => {
        let date;
        let image;

        if (!videos[item].hits[0].userImageURL) {
          date = '';
          image = 'https://via.placeholder.com/150x150?text=Empty';
        } else {
          image = videos[item].hits[0].userImageURL;
          date = getDate(videos[item].hits[0].userImageURL);
        }

        return (
          <Link key={videos[item].hits[0].id} to={`/content/videos/${item}`}>
            <Item image={image} title={item} assets={videos[item].total} date={date} />
          </Link>
        );
      });
  }

  render() {
    const { videos, history } = this.props;

    if (!videos) {
      return <div>Loading...</div>;
    }

    return (
      <div className="videos">
        <PageHeader title="Videos Folder" sortHandler={this.sortHandler} back={history.goBack} />
        <div className="card-list">{this.renderFolders()}</div>
      </div>
    );
  }
}

Videos.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
  videos: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps(state) {
  return {
    videos: state.videos,
  };
}

export default connect(
  mapStateToProps,
  { fetchVideos },
)(Videos);
