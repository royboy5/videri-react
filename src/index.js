import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

import Login from './pages/Login';
import Header from './components/Header';
import Content from './pages/Content';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import ContentList from './components/ContentList';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <React.Fragment>
        <Header />
        <Component {...matchProps} />
      </React.Fragment>
    )}
  />
);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <DefaultLayout path="/content/photos/:id" component={ContentList} />
        <DefaultLayout path="/content/photos" component={Photos} />
        <DefaultLayout path="/content/videos/:id" component={ContentList} />
        <DefaultLayout path="/content/videos" component={Videos} />
        <DefaultLayout path="/content" component={Content} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

render(<App />, document.querySelector('#root'));
