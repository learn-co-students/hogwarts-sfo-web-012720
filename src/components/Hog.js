import React from 'react';

class Hog extends React.Component {
	constructor() {
		super();
		this.state = {
			open: false,
		};
	}

	clickedCard = () => {
		this.setState({
			open: !this.state.open,
		});
	};
    
	getImage = hogName => {
		let formattedName = hogName
			.split(' ')
			.join('_')
			.toLowerCase();
		let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
		return pigPics;
	};

	render() {
		return (
			<div onClick={this.clickedCard} className="ui card">
				<div className="content">
					<img src={this.getImage(this.props.hog.name)} />
					<a className="header">{this.props.hog.name}</a>
					{this.state.open ? (
						<div className="description">
							<p>Specialty: {this.props.hog.specialty}</p>
							<p>Weight: {this.props.hog.weight}</p>
							<p>{this.props.hog.greased}</p>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}
export default Hog;
