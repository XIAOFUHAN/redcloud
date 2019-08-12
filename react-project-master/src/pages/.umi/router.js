import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/popular/popular',
    exact: true,
    component: require('../popular/popular.js').default,
  },
  {
    path: '/searchInput/SearchInput',
    exact: true,
    component: require('../searchInput/SearchInput.js').default,
  },
  {
    path: '/singerClass/singerClass',
    exact: true,
    component: require('../singerClass/singerClass.js').default,
  },
  {
    path: '/singerdetail',
    exact: false,
    component: require('../singerdetail/_layout.js').default,
    routes: [
      {
        path: '/singerdetail/album',
        exact: true,
        component: require('../singerdetail/album.js').default,
      },
      {
        path: '/singerdetail',
        exact: true,
        component: require('../singerdetail/index.js').default,
      },
      {
        path: '/singerdetail/info',
        exact: true,
        component: require('../singerdetail/info.js').default,
      },
      {
        path: '/singerdetail/mv',
        exact: true,
        component: require('../singerdetail/mv.js').default,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
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
