import  './sidebar.css';

export default function Sidebar() {
    return (
        <div className='sidebar'>
           <div className="sidebarItem">
               <span className="sidebarTitle">about me</span>
               <img src="" alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Uma aliquid tempora.</p>
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
           <i className="topIcon fab fa-twitter-square"></i>
              <i className="topIcon fab fa-pinterest-square"></i>
              <i className="topIcon fab fa-instagram-square"></i>
              <i className="topIcon fab fa-linkedin"></i>
           </div>
        </div>
    )
}
