import { FETCH_POSTS, FETCH_PHOTOS } from '../actions/types';
 	 
const initialState = {
	items: [],
	photos: []
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
				photos : action.payload 				
			}	
		default :
			return state;
	}
}