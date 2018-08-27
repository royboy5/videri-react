import React from 'react';
import PropTypes from 'prop-types';

import { InputGroup } from '@blueprintjs/core';

const SearchBox = ({ className }) => <InputGroup className={className} leftIcon="search" />;

SearchBox.propTypes = {
  className: PropTypes.string,
};

SearchBox.defaultProps = {
  className: 'search',
};

export default SearchBox;
