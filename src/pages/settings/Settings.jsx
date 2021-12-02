import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">update your account</span>
					<span className="settingsDeleteTitle">delete account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                       <label htmlFor="fileInput">
                       <i className="settingsPPIcon far fa-user-circle"></i>
                           </label> 
                           <input type="file" id='fileInput' style={{display: 'none'}} />
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder='Brandon' />
                    <label >Email</label>
                    <input type="email" placeholder='brandon@gmail.com' />
                    <label >Password</label>
                    <input type="password"  />
                    <button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
