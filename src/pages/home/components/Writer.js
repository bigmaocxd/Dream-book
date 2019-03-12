import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem, WriterImg, WriterDes } from '../style.js';

class Writer extends PureComponent {
	render() {
		const { list } = this.props;
		return (
			<WriterWrapper>
				<div className="recommend"> Recommended Writers</div>
				{
					list.map((item) => {
						return (
						<WriterItem key={item.get('id')}>
							<WriterImg>
								<img className="writer-img" src={item.get('imgUrl')} />
							</WriterImg>
							<WriterDes>
								<div className="username">{item.get('username')}</div>
								<div className="description">{item.get('des')}</div>
							</WriterDes>
						</WriterItem>
						)}
					)

				}
			</WriterWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home','writerList'])
})

export default connect(mapState,null)(Writer);