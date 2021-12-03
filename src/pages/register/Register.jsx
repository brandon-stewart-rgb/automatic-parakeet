import './register.css'

export default function Register() {
    return (
        <div className='register'>
           
          <form className="registerForm">
          <span className="registerTitle">Register</span>
              <label>Email</label>
              <input type="text" className='registerInput' placeholder='Enter your email...' />
              <label>Password</label>
              <input type="password" className='registerInput' placeholder='Enter your password...'  />
              <button className="registerButton">Register</button>
              <button className="registerRegisterButton">Login</button>
              
          </form>
        
        </div>
    )
}
