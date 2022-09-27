import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Tabs from './components/Tabs';

function App() {
	return (
		<>
			<Header/>
			<BrowserRouter>
				<div className="Container">
					<Menu/>
					<Tabs/>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
