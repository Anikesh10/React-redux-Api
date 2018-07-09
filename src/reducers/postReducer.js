import { FETCH_POSTS, FETCH_PHOTOS } from '../actions/types';
 	 
const initialState = {
	items: [],
	photos: [],
	page: 1
} 	 

export default function(state = initialState,action) {
	switch(action.type) {
		case FETCH_POSTS: 
			return {
				...state,
				items: action.payload
			}
		case FETCH_PHOTOS: 
			return {
				...state,
				photos : action.payload, 
				page : action.pageNo			
			}	
		default :
			return state;
	}
}