import React, { PureComponent } from 'react';
import { DetailWrapper, Title, Content } from './style.js';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Detail extends PureComponent {
	render() {
		const { title, content } = this.props;
		return (
			<DetailWrapper>
				<Title>{title}</Title>
				<Content dangerouslySetInnerHTML={{__html:content}} />
			</DetailWrapper>
		)
	}

	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}
}

const mapState = (state) => ({
	title: state.getIn(['detail','title']),
	content: state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) => ({
	getDetail(id) {
		dispatch(actionCreators.getDetail(id))
	}
})

export default connect(mapState, mapDispatch)(Detail);