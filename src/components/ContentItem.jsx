import React from 'react';
import PropTypes from 'prop-types';

import { Card, Elevation, Icon } from '@blueprintjs/core';

const ContentItem = ({
  image, title, type, res, date,
}) => {
  let typeIcon = '';
  if (type === 'photo') {
    typeIcon = 'media';
  }

  return (
    <Card className="card" interactive elevation={Elevation.TWO}>
      <figure className="card__image" style={{ backgroundImage: `url(${image})` }} />
      <div className="card__info">
        <h5 className="card__title">{title}</h5>
        <p className="card__type">
          <Icon icon={typeIcon} iconSize="2rem" />
        </p>
        <p className="card__res">{`${res}`}</p>
        <p className="card__created">Created</p>
        <p className="card__date">{`${date}`}</p>
      </div>
    </Card>
  );
};

ContentItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  res: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ContentItem;
