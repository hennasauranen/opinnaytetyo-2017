/* @flow */

import type { Dispatch } from './types';
import { fetchUsersIfNeeded } from './containers/Home/action';
import { fetchUserIfNeeded } from './containers/UserInfo/action';
import HomePage from './containers/Home';
import List from './containers/List';
import UserInfoPage from './containers/UserInfo';
import NotFoundPage from './containers/NotFound';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage, // Add your route here
    loadData: (dispatch: Dispatch) => Promise.all([
      dispatch(fetchUsersIfNeeded()), // Register your server-side call action(s) here
    ]),
  },
  {
    path: '/elaimet',
    exact: true,
    component: List, // Add your route here
    loadData: (dispatch: Dispatch) => Promise.all([
      dispatch(fetchUsersIfNeeded()), // Register your server-side call action(s) here
    ]),
  },
  {
    path: '/elaimet/:id',
    component: UserInfoPage,
    loadData: (dispatch: Dispatch, params: Object) => Promise.all([
      dispatch(fetchUserIfNeeded(params.id)),
    ]),
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
