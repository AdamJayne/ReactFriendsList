import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import FriendList from './FriendList'
import './index.css';

ReactDOM.render(
	<div className ="row">
		<App>
			<Header />
			<FriendList />
		</App>
	</div>,
	document.getElementById('root')
);
