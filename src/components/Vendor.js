import { Link } from 'react-router-dom';
import Laptop from './Laptop';
import './styles/login.css';
import './styles/vendor.css';

const Vendor = () => {
    return (
        <div className="main-container">
            <div className="main">
            <Laptop />
            <div className='sub-main'>
                <div className="heading">
                   <div>
                        <Link className="sign-in" to="/vendor">Become a vendor</Link>
                        <p className="vendor-in-line"></p>
                  </div>
                </div>
                <div className="first-name">
                    <label for="text" required>Shop name:</label><br />
                    <input type="text" /> <br />
                </div>
                <div className="email">
                    <label for="text" required>Email:</label><br />
                    <input type="email" /> <br />
                </div>
                <div className="username-two">
                    <label for="text" required>Username:</label><br />
                    <input type="text" /> <br /> 
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
            </div>
        </div>
        </div>
    )
};

export default Vendor;