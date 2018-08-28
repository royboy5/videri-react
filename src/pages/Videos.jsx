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
        console.log(item, 'item');

        const date = getDate(videos[item].hits[0].userImageURL);

        const [, year, month, day] = date;
        return (
          <Link key={videos[item].hits[0].id} to={`/content/videos/${item}`}>
            <Item
              image={videos[item].hits[0].userImageURL}
              title={item}
              assets={videos[item].total}
              date={`/${year}/${month}/${day}`}
            />
          </Link>
        );
      });
  }

  render() {
    const { videos, history } = this.props;
    console.log(videos, 'videos');

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
