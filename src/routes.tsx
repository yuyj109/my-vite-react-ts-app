import React from 'react';
import GlobalLayout from './pages/_layout';

const Index = React.lazy(() => import('./pages/index'));
const EntranceIndex = React.lazy(() => import('./pages/entrance/index'));
const EntranceId = React.lazy(() => import('./pages/entrance/[id]'));

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '/entrance', element: <EntranceIndex />, index: true },
      { path: '/entrance/:id', element: <EntranceId /> },
    ],
  },
];

export const pages = [
  { route: '/' },
  { route: '/entrance' },
  { route: '/entrance/:id' },
];
