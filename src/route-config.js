import React from 'react';
import Tasks from './pages/Tasks';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import User from './pages/User';

const routes = [
  { 
    path: '/',
    exact: true,
    main: () => <Tasks />
  },

  { 
    path: '/task',
    exact: true,
    main: () => <Tasks />
  },

  { 
    path: '/signin',
    exact: true,
    main: () => <SignIn />
  },
  { 
    path: '/signup',
    exact: true,
    main: () => <SignUp />
  },
  { 
    path: '/user',
    exact: true,
    main: () => <User />
  }
];

export default routes;
