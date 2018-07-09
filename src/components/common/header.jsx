import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'reactstrap';

export default class Header extends React.Component {

	render() {
		return (
			<Navbar color="light" light expand="md">
				<NavLink  exact to="/">Home</NavLink>
				<NavLink  exact to="/Albums">Albums</NavLink>
				<NavLink  exact to="/Post">Post</NavLink>
			</Navbar>
		);
	}
}
