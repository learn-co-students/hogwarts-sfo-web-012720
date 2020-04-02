import React from 'react';

class Sort extends React.Component {
	sortNameOrWeight = () => {};
	render = () => {
		return (
			<select onChange={this.props.onChangeType} name="sort" id="sort-pigs-by">
				<option value="default">Default</option>
				<option value="name">Name</option>
				<option value="weight">Weight</option>
			</select>
		);
	};
}

export default Sort;
