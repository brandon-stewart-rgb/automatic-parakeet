import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
        setError(false);
        try{
            const res = await axios.post('/auth/register', {
                username,
                email,
                password,
            });  
            //if successful registration it will redirect to login page
            res.data && window.location.replace('/login')
        }catch(err){
            setError(true);
        }
	};
	return (
		<div className="register">
			<form className="registerForm" onSubmit={handleSubmit}>
				<span className="registerTitle">Register</span>
				<label>Username</label>
				<input
					type="text"
					className="registerInput"
					placeholder="Enter your username..."
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Email</label>
				<input
					type="text"
					className="registerInput"
					placeholder="Enter your email..."
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					type="password"
					className="registerInput"
					placeholder="Enter your password..."
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="registerButton" type="submit">
					Register
				</button>
				<button className="registerLoginButton">
					<Link to="/login" className="link">
						Login
					</Link>
				</button>
        {error && <span style={{color: "red", marginTop:"10px"}}>Something went wrong!</span>}
			</form>
		</div>
	);
}
