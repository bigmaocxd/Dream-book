import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import{
	HomeWrapper,
	HomeLeft,
	HomeRight,
	ReturnTop
}from './style.js'
import bunny from '../../statics/bunny.png';

class Home extends PureComponent {
	handleScrollTop() {
		window.scrollTo(0,0);
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className="banner-img" src="/images/rilakkuma.png" alt=""/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{this.props.showScroll? <ReturnTop onClick={this.handleScrollTop}>TOP</ReturnTop> : null}			
			</HomeWrapper>
		)
	}
	componentDidMount() {
			this.props.changeHomeData();
			this.bindEvents();
		}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow)
	}

	bindEvents() {
	window.addEventListener('scroll', this.props.changeScrollTopShow)
}
};



const mapState = (state) => ({
	showScroll: state.getIn(['home','showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	},
	changeScrollTopShow() {
		if(document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else{
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
})

export default connect(mapState,mapDispatchToProps)(Home);