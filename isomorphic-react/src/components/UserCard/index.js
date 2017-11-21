/* @flow */

import React from 'react';
import type { Element } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

type Props = {
  info: Object
};
const UserCard = ({ info } : Props) : Element < 'div' > => (
  <div className={styles.UserCard}>
    <div className="breadcrumb">
      Olet tässä:
      <Link to={'/'}>Etusivu</Link>
      &raquo;
      <Link to={'/elaimet'}>Eläimet</Link>
      &raquo;
      <Link to={`/elaimet/${info.id}`}>{info.name}</Link>
    </div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{info.name}</title>
      <meta name="description" content="ngff" />
    </Helmet>
    <h1>{info.name} - {info.kuvaus}</h1>

    <p>{ info.intro }</p>

    <a href={info.link}>Wikipedia</a>
  </div>
);

export default UserCard;
