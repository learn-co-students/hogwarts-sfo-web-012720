import React from 'react';
import Hogs from '../porkers_data';
import Hog from './Hog.js';
import Sort from './Sort.js';
import Filter from './Filter.js';

class HogContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			filter: false, //all || greasy
			sortBy: 'default', //name || weight
		};
	}

	sortBy = event => {
		this.setState({
			sortBy: event.target.value,
		});
	};

	filterState = event => {
		this.setState({
			filter: !this.state.filter,
		});
	};

	filteredhogs = () => {
		if (this.state.filter) {
			return Hogs.filter(hog => hog.greased);
		} else {
			return Hogs;
		}
	};

	sortedHogs = () => {
		if (this.state.sortBy === 'default') {
			return this.filteredhogs();
		} else if (this.state.sortBy === 'weight') {
			return this.filteredhogs().sort(function(a, b) {
				return a.weight - b.weight;
			});
		} else if (this.state.sortBy === 'name') {
			return this.filteredhogs().sort(function(a, b) {
				return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
			});
		}
	};

	render = () => {
		return (
			<div id="hog-container">
				<Sort onChangeType={this.sortBy} />
				<Filter onClick={this.filterState} />
				<div className="ui link cards">
					{this.sortedHogs(this.state.sortBy).map(hog => (
						<Hog hog={hog} />
					))}
				</div>
			</div>
		);
	};
}

export default HogContainer;
