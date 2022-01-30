import React, { Component } from 'react';

export default class SearchBar extends Component {
	state = {
		term: '',
	};

	onInputChange = (e) => {
		this.setState({
			term: e.target.value,
		});
	};

	onTermSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className='search-bar ui segment'>
				<form onSubmit={this.onTermSubmit} className='ui form'>
					<div className='field'>
						<label className=''>Video Search</label>
						<input onChange={this.onInputChange} value={this.state.value} type='text' />
					</div>
				</form>
			</div>
		);
	}
}
