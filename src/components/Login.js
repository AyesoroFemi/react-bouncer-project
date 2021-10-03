import { Link } from 'react-router-dom';
import './styles/login.css';
import Laptop from './Laptop.js';
const Login = () => {
    return (
       <div class="main-container">
            <div className="main">
                <Laptop />
                <div className='sub-main'>
                    <div className="heading">
                    <div>
                            <Link className="sign-in" to="/">Sign in</Link>
                            <p className="sign-in-line"></p>
                    </div>
                    <div className="register">
                        <Link to="/register">Register</Link>
                    </div>
                    </div>
                    <div className="username">
                        <label for="text" required>Username:</label><br />
                        <input type="text" /> <br />
                    </div>
                    <div className="password">
                        <label for="password">Password</label><br />
                        <input type="password" required /> <br />
                    </div>
                    <input type="submit" value="Login" />
                    <div className="bottom">
                        <div>
                            <Link className="vendor" to="/vendor">Become a vendor</Link>
                    </div>
                        <div className="forgot-password">
                            <Link to="/forgot">Forgot password</Link>
                        </div>
                    </div>
                </div>
            </div>

       </div>
    )
}

export default Login