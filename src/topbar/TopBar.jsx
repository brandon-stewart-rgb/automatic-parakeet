import './topbar.css';
 

export default function TopBar() {
    return (
        <div className='top'>
          <div className="topLeft">
              <i className="topIcon fab fa-twitter-square"></i>
              <i className="topIcon fab fa-pinterest-square"></i>
              <i className="topIcon fab fa-instagram-square"></i>
              <i className="topIcon fab fa-linkedin"></i>
              </div>
          <div className="topCenter">
            <ul className="topList">
              <li className="topListItem">home</li>
              <li className="topListItem">about</li>
              <li className="topListItem">contact</li>
              <li className="topListItem">write</li>
              <li className="topListItem">logout</li>
            </ul>
          </div>
          <div className="topRight">
              <img className='topImg'
              src="https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="pexels" />
              <i className="topSearchIcon fas fa-search"></i>
          </div>
        </div>
    )
}
