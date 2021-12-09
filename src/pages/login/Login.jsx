import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
        <div className='login'>
           
          <form className="loginForm">
          <span className="loginTitle">Login</span>
              <label>Email</label>
              <input type="text" className='loginInput' placeholder='Enter your email...' />
              <label>Password</label>
              <input type="password" className='loginInput' placeholder='Enter your password...'  />
              <button className="loginButton">Login</button>
              <button className="loginRegisterButton">
                  <Link to='/register' className='link'>Register</Link>
              </button>
              
          </form>
        
        </div>
    )
}
