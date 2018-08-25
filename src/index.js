import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

import Login from './pages/Login';
import Content from './pages/Content';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/content" component={Content} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

render(<App />, document.querySelector('#root'));
