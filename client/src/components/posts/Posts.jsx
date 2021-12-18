import './posts.css';
import Post from '../post/Post';

export default function Posts({ posts }) {
	return (
		<div className="posts">
			{/* array method */}
			{posts.map((p) => (
				<Post post={p} />
			))}
		</div>
	);
}
