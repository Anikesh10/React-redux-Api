import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/postActions';
import Loader from './Loader';

class Albums extends Component {
	componentWillMount () {
		this.props.fetchPhotos();
	}

	render() {
		let eachPost;
		console.log(this);
		if(this.props.albums && this.props.albums.length) {
			eachPost = this.props.albums.map( postItem => (
				<li key={postItem.id}>	
					<h3>{postItem.title}</h3>
					<p>{postItem.body}</p>
					<img src={postItem.thumbnailUrl}/>
				</li>	
				));
			}
		else { eachPost= <Loader/> }	

		return (
			<ol>{eachPost}</ol>
		)};
}

const mapStateToProps = state => ({
	albums : state.posts.photos
})


export default connect( mapStateToProps, { fetchPhotos })(Albums);