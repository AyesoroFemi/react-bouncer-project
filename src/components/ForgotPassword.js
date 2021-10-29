import { Link } from 'react-router-dom';
import Laptop from './Laptop';
import './styles/login.css';
import './styles/forget.css';
import NavBar from './Navbar';

const ForgotPassword = () => {
    return (
        <div className="main-container">
            <NavBar/>
            <div className="main">
                <Laptop />
                <div className='sub-main'>
                    <div class="heading">
                    <div>
                            <Link class="sign-in" to="/forgot">Forgot Password</Link>
                            <p class="password-in-line"></p>
                    </div>
                    </div>
                    <div className="username">
                        <label for="text" >Username:</label><br />
                        <input type="text" required /> <br />
                    </div>
                
                    <input type="submit" value="Submit" />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;