import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/postActions';
import Loader from '../loader/Loader';
import { Card, CardImg, CardBody, CardTitle , Row, Col} from 'reactstrap';

class Albums extends Component {
	componentWillMount () {
		this.props.fetchPhotos();
	}

	render() {
		let eachPost;
		console.log(this);
		if(this.props.albums && this.props.albums.length) {
			eachPost = this.props.albums.map( postItem => (
				<Col sm="3">
					<Card key={postItem.id}>	
						<CardImg top width="100%" src={postItem.thumbnailUrl} alt={postItem.title} />
						<CardBody>
							<CardTitle>{postItem.title}</CardTitle>
						</CardBody>	
					</Card>	
				</Col>
			));
		}
		else { eachPost= <Loader/> }	

		return (
			<Row>
				{eachPost}
			</Row>	
		)};
}

const mapStateToProps = state => ({
	albums : state.posts.photos
})


export default connect( mapStateToProps, { fetchPhotos })(Albums);