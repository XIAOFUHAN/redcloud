import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/attention',
        exact: true,
        component: require('../attention.js').default,
      },
      {
        path: '/fans',
        exact: true,
        component: require('../fans.js').default,
      },
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
      },
      {
        path: '/login',
        exact: true,
        component: require('../login/index.js').default,
      },
      {
        path: '/playlist',
        exact: true,
        component: require('../playlist.js').default,
      },
      {
        path: '/rankinglist',
        exact: true,
        component: require('../rankinglist.js').default,
      },
      {
        path: '/selfFM',
        exact: true,
        component: require('../selfFM.js').default,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/33790/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/33790/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
