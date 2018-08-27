import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPhotos } from '../actions';

import PageHeader from '../components/PageHeader';

class Content extends Component {
  constructor(props) {
    super(props);

    this.renderFolders = this.renderFolders.bind(this);
    this.sortHandler = this.sortHandler.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const { fetchPhotos: photos } = this.props;
    const search = ['extreme', 'sports', 'cars'];

    search.forEach((query) => {
      photos(query);
    });
  }

  sortHandler() {
    console.log(this.props, 'clicked');
  }

  renderFolders() {
    const { photos } = this.props;

    console.log(photos, 'render');

    return Object.keys(photos)
      .sort()
      .map((item) => {
        console.log(item, 'item');
        return (
          <div key={item}>
            <div>{item}</div>
            <div>{photos[item].total}</div>
          </div>
        );
      });
  }

  render() {
    const { photos } = this.props;
    console.log(photos, 'photos');

    if (!photos) {
      return <div>Loading...</div>;
    }

    return (
      <div className="photos">
        <PageHeader title="Photos" sortHandler={this.sortHandler} />
        <div className="">{this.renderFolders()}</div>
      </div>
    );
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
