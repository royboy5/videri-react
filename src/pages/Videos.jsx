import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchVideos } from '../actions';

import PageHeader from '../components/PageHeader';

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
    // const search = ['extreme', 'sports', 'cars'];

    // search.forEach((query) => {
    //   photos(query);
    // });

    videos('sports');
  }

  sortHandler() {
    console.log(this.props, 'clicked');
  }

  renderFolders() {
    const { videos } = this.props;

    console.log(videos, 'render');

    return Object.keys(videos).map((item) => {
      console.log(item, 'item');
      return (
        <div key={item}>
          <div>{item}</div>
          <div>{videos[item].total}</div>
        </div>
      );
    });
  }

  render() {
    const { videos } = this.props;
    console.log(videos, 'videos');

    if (!videos) {
      return <div>Loading...</div>;
    }

    return (
      <div className="videos">
        <PageHeader title="Videos" sortHandler={this.sortHandler} />
        <div className="videos__content">{this.renderFolders()}</div>
      </div>
    );
  }
}

Videos.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
  videos: PropTypes.instanceOf(Object).isRequired,
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
