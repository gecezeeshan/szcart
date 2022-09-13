import React from 'react';
import Nav from './Nav';
import classes from './Layout.module.css';

function Layout(props) {
	return (
		<>
			<Nav></Nav>
			<main className={classes.main}>
				{props.children}
			</main>
		</>

	)
}

export default Layout;
