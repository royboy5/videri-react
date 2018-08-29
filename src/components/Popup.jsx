import React from 'react';
import PropTypes from 'prop-types';

import {
  Player,
  ControlBar,
  PlayToggle,
  BigPlayButton,
  CurrentTimeDisplay,
  TimeDivider,
  DurationDisplay,
  ProgressControl,
} from 'video-react';
import { Icon, Dialog } from '@blueprintjs/core';

const Popup = ({ showPopup, closePopup, content }) => (
  <Dialog
    className="popup"
    isOpen={showPopup}
    onClose={closePopup}
    canOutsideClickClose={false}
    backdropClassName="popup-backdrop"
  >
    <Icon className="popup__close" icon="cross" onClick={closePopup} iconSize="4rem" />
    <p className="popup__title">{content.filename}</p>
    <figure className="popup__media">
      {content.isPhoto ? (
        <img src={content.url} alt="" />
      ) : (
        <Player src={content.url}>
          <BigPlayButton position="center" />
          <ControlBar autoHide={false} disableDefaultControls>
            <PlayToggle />
            <CurrentTimeDisplay />
            <TimeDivider />
            <DurationDisplay />
            <ProgressControl />
          </ControlBar>
        </Player>
      )}
    </figure>
  </Dialog>
);

Popup.propTypes = {
  showPopup: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  content: PropTypes.instanceOf(Object).isRequired,
};

export default Popup;
