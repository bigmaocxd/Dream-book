import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { CSSTransition } from 'react-transition-group';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	NavSearch,
	Addition,
	Button,
}from './style.js'
import { Link } from 'react-router-dom';

class Header extends Component {
	getListArea() {
		const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS();
		const pageList = [];
	
		if (newList.length) {
			for (let i = (page - 1) * 5; i < page * 5; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

		if(focused || mouseIn) {
			return(
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>
					hottest
						<SearchInfoSwitch onClick={ () => handleChangePage(page, totalPage, this.spinIcon) }>
						<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
						others
						</SearchInfoSwitch>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
					</SearchInfoTitle>
				</SearchInfo>
			)
		}else{

			return null;
		}
	};
	render() {
		const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
		return(
			<HeaderWrapper>
				<Link to='/'>
					<Logo/>
				</Link>
				<Nav>
					<NavItem className="left active">Home</NavItem>
					<NavItem className="left">Articles</NavItem>
					{
						login ? <NavItem className="right" onClick={logout}>Logout</NavItem> : 
						<Link to='/login'><NavItem className="right">Login</NavItem></Link>
					}
					
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide">
							<NavSearch
							className={focused ? 'focused' : ''}
							onFocus={() => handleInputFocus(list)}
							onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60d;</i>
						{ this.getListArea() }
					</SearchWapper>
				</Nav>
				<Addition>
					<Button>Register</Button>
					<Link to='/write'>
						<Button className="post">
						<i className="iconfont">&#xe670;</i>
						Post
						</Button>
					</Link>
				</Addition>
			</HeaderWrapper>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		list: state.getIn(['header','list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login','login'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList()); // if... {...}
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			let prevAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if(prevAngle) {
				prevAngle = parseInt(prevAngle, 10);
			}else{
				prevAngle = 0;
			}
			spin.style.transform = 'rotate(' + (prevAngle + 360) +'deg)';
			if(page < totalPage){
				dispatch(actionCreators.changePage(page + 1));
			}else{
				dispatch(actionCreators.changePage(1));
			}
			
		},
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
