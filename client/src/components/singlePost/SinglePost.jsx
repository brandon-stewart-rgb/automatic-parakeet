import axios from 'axios';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import './singlePost.css';
import { Link } from 'react-router-dom';

export default function SinglePost() {
	const location = useLocation();
	// splitting url and taking second item which is post id... 0,1,2
	const path = location.pathname.split('/')[2];
	const [post, setPost] = useState({});
	// whenever path changes, fire useEffect
	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get('/posts/' + path);
			setPost(res.data);
		};
		getPost();
	}, [path]);
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.photo && (
					<img src={post.photo} alt="" className="singlePostImg" />
				)}
				<h1 className="singlePostTitle">
					{post.title}
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="SinglePostAuthor">
						Author:
                        <Link to={`/?user=${post.username}`} className='link'> <b>{post.username}</b></Link>
					</span>
					<span className="SinglePostDate">
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				<p className="singlePostDesc"> {post.desc}</p>
			</div>
		</div>
	);
}