import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Header">
				<NavLink to="/Albums">Albums</NavLink>
				<br/>	
				<NavLink to="/Post">Post</NavLink>
			</div>
		);
	}
}
