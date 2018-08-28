import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import SortGroup from './SortGroup';
import SearchBox from './SearchBox';

const PageHeader = ({ title, sortHandler, back }) => (
  <div className="page-header">
    <div className="page-header__top">
      <Button icon={IconNames.CHEVRON_LEFT} onClick={back} className="page-header__back-link" />
      <h3 className="page-header__title">{`${title}`}</h3>
      <div className="page-header__link">New Folder</div>
    </div>
    <div className="page-header__bot">
      <SortGroup className="page-header__sort" sortBy={sortHandler} />
      <SearchBox className="page-header__search" />
    </div>
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  sortHandler: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
};

export default PageHeader;
