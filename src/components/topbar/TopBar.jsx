import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
	const user = false;
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fab fa-twitter-square"></i>
				<i className="topIcon fab fa-pinterest-square"></i>
				<i className="topIcon fab fa-instagram-square"></i>
				<i className="topIcon fab fa-linkedin"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link to="/" className="link">
							home
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/about" className="link">
							about
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/about" className="link">
							contact
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/write" className="link">
							write
						</Link>
					</li>
					<li className="topListItem">{user && 'LOGOUT'}</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img
						className="topImg"
						src="https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="pexels"
					/>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link to="/login" className="link">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							<Link to="/register" className="link">
								REGISTER
							</Link>
						</li>
					</ul>
				)}

				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}
