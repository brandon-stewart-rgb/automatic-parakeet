import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';

export default function TopBar() {
	// pseudo user
	// const user = false;

	const {user, dispatch} = useContext(Context);
	const handleLogout = () => {
		dispatch({type: 'LOGOUT'});
	}
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
					<li className="topListItem" onClick={handleLogout}>{user && 'LOGOUT'}</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img
						className="topImg"
						src={user.profilePic}
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
