/* eslint-disable react/sort-comp */
/* @flow */

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// import type { Element } from 'react';
// import { connect } from 'react-redux';
// import type { Connector } from 'react-redux';
import Helmet from 'react-helmet';

// import * as action from './action';
// import type { Home as HomeType, Dispatch, Reducer } from '../../types';
import styles from './styles.scss';

// type Props = { home: HomeType, fetchUsersIfNeeded: () => void };

// Export this for unit testing more easily
export default class Home extends PureComponent {
  componentDidMount() {
  //  this.props.fetchUsersIfNeeded();
  }
  render() {
    return (
      <div className={styles.Home}>
        <div className="breadcrumb">
            Olet tässä: <Link to={'/'}>Etusivu</Link>
        </div>
        <Helmet>
          <title>Etusivu</title>
        </Helmet>
        <h1>Opinnäytetyötuotos</h1>
        <p>Työ on tuotettu osana tietojenkäsittelyn koulutusohjelmaa. Kyseessä on
        opinnäytetyön tuotos, jonka avulla voidaan havainnoida
        isomorphisen JavaScript sovelluksen indeksoitumista hakukoneisiin</p>
        <h2>Isomorfinen/Universaali javascript sovellus</h2>
        <p>Node.js, Express, React, Redux ja React Router v4.
        Boilerplate sovelluksen pohjalla:
        </p><a href="https://github.com/wellyshen/react-cool-starter">Boilerplate sovelluksen pohjalla</a>
      </div>
    );
  }
}

/* const connector: Connector<{}, Props> = connect(
  ({ home }: Reducer) => ({ home }),
  (dispatch: Dispatch) => ({
    fetchUsersIfNeeded: () => dispatch(action.fetchUsersIfNeeded()),
  }),
); */

// export default connector(Home);
