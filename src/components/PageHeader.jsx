import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import SortGroup from './SortGroup';
import SearchBox from './SearchBox';

const PageHeader = ({ title, sortHandler }) => (
  <div className="page-header">
    <div className="page-header__top">
      <Link to="/content" className="page-header__back-link">
        <MdKeyboardArrowLeft size="3rem" />
      </Link>
      <h3 className="page-header__title">{`${title} Folders`}</h3>
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
};

export default PageHeader;
