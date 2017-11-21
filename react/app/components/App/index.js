/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import HomePage from 'components/HomePage';
import List from 'components/List';
import UserInfo from 'components/UserInfo';
import NotFoundPage from 'components/NotFoundPage';

const image = require('../navimg.png')
export default function App() {
  return (
    <div>
    <img className="navimg" src={image} alt="react seo test" />
      <nav>
        <Link to={'/'}>Etusivu</Link>
        <div className="dropdown">
          <Link to={'/elaimet'}>Eläimet</Link>
          <div className="dropdowncontent">
            <Link to={'/elaimet/kissa'}>Kissa</Link>
            <Link to={'/elaimet/koira'}>Koira</Link>
            <Link to={'/elaimet/tiikeri'}>Tiikeri</Link>
            <Link to={'/elaimet/karhu'}>Karhu</Link>
          </div>
        </div>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/elaimet" component={List} />
        <Route exact path="/elaimet/:id" component={UserInfo} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}
