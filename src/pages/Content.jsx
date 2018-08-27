import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdFolder } from 'react-icons/md';

const Content = (props) => {
  const { match } = props;

  return (
    <div className="content">
      <Link to={`${match.url}/photos`}>
        <figure>
          <MdFolder size="8rem" />
          {' '}
          <figcaption>Photos</figcaption>
        </figure>
      </Link>
      <Link to={`${match.url}/videos`}>
        <figure>
          <MdFolder size="8rem" />
          {' '}
          <figcaption>Videos</figcaption>
        </figure>
      </Link>
    </div>
  );
};

Content.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default Content;
