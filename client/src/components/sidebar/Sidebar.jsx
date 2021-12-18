import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
	// initial state empty array
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get('/categories');
			setCats(res.data);
		};
		getCats();
	}, []);
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">about me</span>
				<img
					src="https://images.pexels.com/photos/9987137/pexels-photo-9987137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					alt=""
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Uma aliquid
					tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Uma
					aliquid tempora.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">categories</span>
				<ul className="sidebarList">
					{cats.map(c =>(
						<Link to={`/?cat=${c.name}`} className='link'>
						<li className="sidebarListItem">{c.name}</li>
						</Link>
					))}
					
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">follow us</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fab fa-twitter-square"></i>
					<i className="sidebarIcon fab fa-pinterest-square"></i>
					<i className="sidebarIcon fab fa-instagram-square"></i>
					<i className="sidebarIcon fab fa-linkedin"></i>
				</div>
			</div>
		</div>
	);
}
