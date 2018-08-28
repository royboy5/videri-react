import React from 'react';
import PropTypes from 'prop-types';

import { Card, Elevation } from '@blueprintjs/core';
import { MdFolder } from 'react-icons/md';

const Item = ({
  image, title, assets, date,
}) => (
  <Card className="card" interactive elevation={Elevation.TWO}>
    <figure className="card__image" style={{ backgroundImage: `url(${image})` }}>
      <MdFolder size="3rem" />
    </figure>
    <div className="card__info">
      <h5 className="card__title">{title}</h5>
      <p className="card__assets">{`${assets} assets`}</p>
      <p className="card__created">Created</p>
      <p className="card__date">{`${date}`}</p>
    </div>
  </Card>
);

Item.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  assets: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default Item;
