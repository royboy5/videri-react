import React from 'react';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const Header = () => (
  <header className="header">
    <div className="header__top">
      <Logo />
      <div className="header__tab">
        <span className="fs-small">Organization</span>
        {' '}
        <br />
        <span>151 Pro-Serv</span>
      </div>
      <div className="header__account-info">
        <span className="header__user">admin@videri.com</span>
        <Icon icon={IconNames.USER} iconSize={Icon.SIZE_LARGE} />
      </div>
    </div>
    <nav className="header__navigation">
      <ul>
        <li>Canvases</li>
        <li>
          <Link to="/content" className="active">
            Content
          </Link>
        </li>
        <li>Playlist</li>
      </ul>
    </nav>
  </header>
);

export default Header;
