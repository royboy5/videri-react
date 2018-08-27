import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPhotos } from '../actions';

class Content extends Component {
  constructor(props) {
    super(props);

    this.renderFolders = this.renderFolders.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const { fetchPhotos: photos } = this.props;
    // const search = ['extreme', 'sports', 'cars'];

    // search.forEach((query) => {
    //   photos(query);
    // });

    photos('sports');
  }

  renderFolders() {
    const { photos } = this.props;

    console.log(photos, 'render');

    return 'hi';
  }

  render() {
    const { photos } = this.props;
    console.log(photos, 'photos');

    if (!photos) {
      return <div>Loading...</div>;
    }

    return <div>{this.renderFolders()}</div>;
  }
}
Content.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  photos: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps(state) {
  return {
    photos: state.photos,
  };
}

export default connect(
  mapStateToProps,
  { fetchPhotos },
)(Content);
