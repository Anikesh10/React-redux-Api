import { FETCH_POSTS, FETCH_PHOTOS } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
 axios('https://jsonplaceholder.typicode.com/posts')
	.then( res => (res.data))
	.then ( posts => 
		dispatch({
			type: FETCH_POSTS,
			payload: posts
		})
	);
};

export const fetchPhotos = (page=1) => dispatch => {
	axios(`https://jsonplaceholder.typicode.com/photos?albumId=${page}`)
	.then( res => (res.data))
	.then ( album => 
		dispatch({
			type: FETCH_PHOTOS,
			payload: album,
			pageNo: page 
		})
	);
};		