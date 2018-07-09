import React ,{ Component } from 'react';
import { Route, Link } from 'react-router-dom' ;
import App from '../App';

import Post from '../components/post';
import Albums from '../components/albums';

const routeConfig = [
				{
					path:"/Albums",
					component: Albums
				},
				{
					path:"/Post",
					component: Post
				}
			];


const RouteWithSubRoutes = route => (
  <Route
    path={route.path}                                                                                     
    render={props => (
	    <route.component {...props} routes={route.routes} />
    )}
  />
);

export const Routes = () => (
	<div>
		{routeConfig.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
	</div>
);				

