import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	width: 625px;
	margin-left: 15px;
	padding-top: 30px;
	float: left;
	.banner-img {
		width: 625px;
		height: 300px;
	}
`;


export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc
`;

export const TopicItem = styled.div`
	float: left;
	padding-right: 10px;
	margin-left: 18px;
	margin-bottom: 18px;
	background: #f7f7f7;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	color: #000;
	border: solid 1px #dcdcdc;
	border-radius: 4px;
	.topic-pic{
		display: block;
		float: left;
		margin-right: 10px;
		width: 32px;
		height: 32px;
	}
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc
	.pic {
		display: block;
		float: right;
		width: 150px;
		height: 100px;
	}
`;

export const ListInfo = styled.div`
	width:450px;
	float: left;
	.title {
		line-height: 27px;
		font-size:18px;
		font-weight: bold;
	}
	.desc {
		line-height:24px;
		font-size: 13px;
		color: #999;
	}
`;


export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	margin: 30px 0;
	line-height:40px;
	text-align: center;
	background: #a5a5a5;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;


export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	margin-top: 8px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
	border-radius: 5px;
`;

export const WriterWrapper = styled.div`
	width:270px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	.recommend {
		padding-left: 10px;
		height: 40px;
		line-height: 40px;
		background: #ececec;
		color: #777;
	}
`;

export const WriterItem = styled.div`
	width:270px;
	height: 70px;
	padding: 10px;
	box-sizing: border-box;
	border-bottom: 1px solid #dcdcdc;
`;

export const WriterImg = styled.div`
	overflow: hidden;
	width: 50px;
	height: 50px;
	float: left;
	border-radius: 50%;
	.writer-img {
		height: 100%;
	}
`;

export const WriterDes = styled.div`
	width:200px;
	height: 50px;
	float: right;
	padding-left: 20px;
	box-sizing: border-box;
	.username {
		font-weight: bolder;
		margin-top: 5px;
	}
	.description {
		color: #999;
		margin-top: 5px;
		font-size: 13px;
	}
`;

export const ReturnTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
	cursor: pointer;
`
