import React from 'react';

class Filter extends React.Component {
	//console.log(this.props)
	render = () => {
		return (
			<div>
				<button onClick={this.props.onClick}> Filter Greasy Pigs </button>
			</div>
		);
	};
}
export default Filter;
