import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Content = (props) => {
  const { match } = props;

  return (
    <div>
      <Link to={`${match.url}/photos`}>Photos</Link>
      <Link to={`${match.url}/videos`}>Videos</Link>
    </div>
  );
};

Content.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default Content;
