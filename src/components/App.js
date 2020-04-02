import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import Sort from './Sort.js';
import Filter from './Filter.js';
import HogContainer from './HogContainer.js';

// import HelloWorld from './HelloWorld';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<HogContainer />
			</div>
		);
	}
}

export default App;
