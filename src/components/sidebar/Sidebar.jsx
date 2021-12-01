import './sidebar.css';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">about me</span>
				<img src="https://images.pexels.com/photos/9987137/pexels-photo-9987137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Uma aliquid
					tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Uma aliquid
					tempora.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">categories</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Sports</li>
					<li className="sidebarListItem">Style</li>
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
