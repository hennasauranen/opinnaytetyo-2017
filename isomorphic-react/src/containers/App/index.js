/* @flow */

import React from 'react';
import type { Element } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import _ from 'lodash';

import config from '../../config';
import routes from '../../routes';
// Import your global styles here
import '../../theme/normalize.css';
import styles from './styles.scss';

const App = () : Element < 'div' > => {
  // Use it when sub routes are added to any route it'll work
  const routeWithSubRoutes = (route): Element<typeof Route> => (
    <Route
      key={_.uniqueId()}
      exact={route.exact || false}
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes || null} />
      )}
    />
  );
  return (
    <div className={styles.App}>
      <Helmet {...config.app} />
      <div className={styles.header}>
        <img src={require('./assets/banner2.png')} alt="Logo" role="presentation" />
        <nav>
          <Link to={'/'}>Etusivu</Link>
          <div className={styles.dropdown}>
            <Link to={'/elaimet'}>Eläimet</Link>
            <div className={styles.dropdowncontent}>
              <Link to={'/elaimet/kissa'}>Kissa</Link>
              <Link to={'/elaimet/koira'}>Koira</Link>
              <Link to={'/elaimet/tiikeri'}>Tiikeri</Link>
              <Link to={'/elaimet/karhu'}>Karhu</Link>
            </div>
          </div>
        </nav>
      </div>
      <hr />
      <Switch>{routes.map(route => routeWithSubRoutes(route))}</Switch>
    </div>
  );
};

export default App;
