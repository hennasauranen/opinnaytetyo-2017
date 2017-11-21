/* @flow */

import React from 'react';
import type { Element } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

type Props = { list: Array<Object> };

const UserList = ({ list }: Props): Element<'div'> => (
  <div className={styles.UserList}>
    <div className="breadcrumb">
      Olet tässä:
      <Link to={'/'}>Etusivu</Link>
      &raquo;
      <Link to={'/elaimet'}>Eläimet</Link>
    </div>
    <h1>Eläin lista</h1>
    <ul>
      {list.map(user => (
        <li key={user.id}>
          <Link to={`/elaimet/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;
