import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/postActions';
import Loader from '../loader/Loader';
import { Card, CardImg, CardBody, CardTitle , Row, Col, Button} from 'reactstrap';

import './album.css';

class Albums extends Component {
	constructor(props) {
		super(props);
		this.onHandleClickNext= this.onHandleClickNext.bind(this);
		this.onHandleClickPrevious= this.onHandleClickPrevious.bind(this);
	}


	componentWillMount () {
		this.props.fetchPhotos();
	}

	onHandleClickNext() {
		console.log(this.props);
		let page=this.props.page;
		page++;
		this.props.fetchPhotos(page);
	}

	onHandleClickPrevious() {
		let page=this.props.page;
		page--;
		this.props.fetchPhotos(page);
	}

	render() {
		let eachPost;
		if(this.props.albums && this.props.albums.length) {
			eachPost = this.props.albums.map( postItem => (
				<Col sm="4" key={postItem.id}>
					<Card >	
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
			<div>
				<Row>
					{eachPost}
				</Row>	
				<div className="container page">
					{ (this.props.page===1) 
						? <i/> :
						 <Button color="primary" size="sm" onClick={this.onHandleClickPrevious}>Previous</Button> }
					<span>{this.props.page}</span>	
					<Button color="primary" size="sm" onClick={this.onHandleClickNext}>Next</Button>
				</div>
			</div>
		)};
}

const mapStateToProps = state => ({
	albums : state.posts.photos,
	page: state.posts.page
})


export default connect( mapStateToProps, { fetchPhotos })(Albums);