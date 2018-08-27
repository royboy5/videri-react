import React from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup, Button } from '@blueprintjs/core';

const SortGroup = ({ className, sortBy }) => (
  <ButtonGroup minimal className={className}>
    <Button active rightIcon="caret-down" onClick={sortBy}>
      Name
    </Button>
    <Button rightIcon="caret-down" onClick={sortBy}>
      Last Update Date
    </Button>
    <Button rightIcon="caret-down" onClick={sortBy}>
      Create Date
    </Button>
  </ButtonGroup>
);

SortGroup.propTypes = {
  sortBy: PropTypes.func.isRequired,
  className: PropTypes.string,
};

SortGroup.defaultProps = {
  className: 'search',
};

export default SortGroup;
