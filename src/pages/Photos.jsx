import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPhotos } from '../actions';

import PageHeader from '../components/PageHeader';
import Item from '../components/FolderItem';
import { getDate } from '../utils/getInfo';

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

    return Object.keys(photos)
      .sort()
      .map((item) => {
        const date = getDate(photos[item].hits[0].previewURL);

        return (
          <Link key={photos[item].hits[0].id} to={`/content/photos/${item}`}>
            <Item
              image={photos[item].hits[0].previewURL}
              title={item}
              assets={photos[item].total}
              date={date}
            />
          </Link>
        );
      });
  }

  render() {
    const { photos, history } = this.props;

    if (!photos) {
      return <div>Loading...</div>;
    }

    return (
      <main className="photos">
        <PageHeader title="Photos Folder" sortHandler={this.sortHandler} back={history.goBack} />
        <div className="card-list">{this.renderFolders()}</div>
      </main>
    );
  }
}
Content.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  photos: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
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
