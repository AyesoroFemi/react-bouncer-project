import { Link } from 'react-router-dom';
import './styles/login.css';
import './styles/register.css';
import Laptop from './Laptop';

const Register = () => {
    return (
        <div className="main-container">
            <div className="main">
                <Laptop />
                <div className='sub-main'>
                    <div className="heading">
                        <div>
                            <Link class="sign-in" to="/">Sign in</Link>
                        </div>
                        <div className="register">
                            <Link to="/register">Register</Link>
                            <p class="register-in-line"></p>
                        </div>
                    </div>
                    <div className="first-name">
                        <label for="text" required>First name:</label><br />
                        <input type="text" /> <br />
                    </div>
                    <div className="last-name">
                        <label for="text" required>Last name:</label><br />
                        <input type="text" /> <br />
                    </div>
                    <div className="username-two">
                        <label for="text" required>Username:</label><br />
                        <input type="text" /> <br />
                    </div>
                    <div className="email">
                        <label for="text" required>Email:</label><br />
                        <input type="email" /> <br />
                    </div>
                    <div className="password">
                        <label for="psrd">Password:</label><br />
                        <input type="password" required /> <br />
                    </div>
                    <div className="password">
                        <label for="password">Confirm Password:</label><br />
                        <input type="password" required /> <br />
                    </div>
                    <input type="submit" value="Sign Up" />
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

export default Register;