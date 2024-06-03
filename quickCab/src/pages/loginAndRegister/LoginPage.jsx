import { useState } from "react"
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"

export function LoginPage() {
  const  [ actions, setActions ] = useState('')

  const handleRegisterClick = () => setActions(' active')
  const handleLoginClick = () => setActions('')

  return (
    <div className={`wrapper${actions}`}>
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>
                <div className="remmember-forget">
                    <label><input type="checkbox"/> Remmember me</label>
                    <a href="#">Forgot your password?</a>
                </div>
                <button type="submit">
                    Login
                </button>
                <div className="register-link">
                    <p> Don`t have an account? <a href="#" onClick={handleRegisterClick}>Register</a></p>
                </div>
            </form>
        </div>

        <div className="form-box register">
            <form action="">
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                    <FaEnvelope className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div> 
                <div className="remmember-forget">
                    <label><input type="checkbox"/>I agree to the terms & conditions</label>
                </div>
                <button type="submit">
                    Register
                </button>
                <div className="register-link">
                    <p> Don`t have an account? <a href="#" onClick={handleLoginClick}>Login</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}