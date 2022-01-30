import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../services/youtubeApi';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends Component {
	state = {
		videos: [],
		selectedVideo: null,
	};

	componentDidMount() {
		this.onTermSubmit('plants');
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = (video) => {
		this.setState({
			selectedVideo: video,
		});
	};
	render() {
		return (
			<div className='ui container'>
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className='ui grid'>
					<div className='iu row'>
						<div className='ten wide column'>
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className='six wide column'>
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
