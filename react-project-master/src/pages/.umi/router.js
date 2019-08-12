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
        path: '/Account',
        exact: false,
        component: require('../Account/_layout.js').default,
        routes: [
          {
            path: '/Account',
            exact: true,
            component: require('../Account/index.js').default,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/Administrator.PCOS-2019JKNJCI/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
          },
        ],
      },
      {
        path: '/Find',
        exact: false,
        component: require('../Find/_layout.js').default,
        routes: [
          {
            path: '/Find/Hoststation',
            exact: true,
            component: require('../Find/Hoststation.js').default,
          },
          {
            path: '/Find',
            exact: true,
            component: require('../Find/index.js').default,
          },
          {
            path: '/Find/Rank',
            exact: true,
            component: require('../Find/Rank.js').default,
          },
          {
            path: '/Find/Songlist',
            exact: true,
            component: require('../Find/Songlist.js').default,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/Administrator.PCOS-2019JKNJCI/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
          },
        ],
      },
      {
        path: '/Friends',
        exact: false,
        component: require('../Friends/_layout.js').default,
        routes: [
          {
            path: '/Friends',
            exact: true,
            component: require('../Friends/index.js').default,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/Administrator.PCOS-2019JKNJCI/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
          },
        ],
      },
      {
        path: '/Mymusic',
        exact: false,
        component: require('../Mymusic/_layout.js').default,
        routes: [
          {
            path: '/Mymusic',
            exact: true,
            component: require('../Mymusic/index.js').default,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/Administrator.PCOS-2019JKNJCI/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/Administrator.PCOS-2019JKNJCI/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/Administrator.PCOS-2019JKNJCI/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
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
