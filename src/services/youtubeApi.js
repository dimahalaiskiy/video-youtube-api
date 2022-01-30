import axios from 'axios';

const KEY = 'AIzaSyC7inSwQ9R7BWA6nnOH9HiVtamAtRPluYA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
