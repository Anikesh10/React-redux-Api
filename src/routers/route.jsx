import React from 'react';
import { Route } from 'react-router-dom' ;

import Post from '../components/post/post';
import Albums from '../components/albums/albums';
import Header from '../components/common/header';

const routeConfig = [
				{
					path:"/",
					component: Header
				},
				{
					path:"/Albums",
					component: Albums
				},
				{
					path:"/Post",
					component: Post
				}
			];


export const Routes = () => (
	<div>
		{routeConfig.map((route, i) => <Route path={route.path} key={i} render={
			props => (<route.component {...props} routes={route.routes} /> )}
  		/>)}
	</div>
);				

