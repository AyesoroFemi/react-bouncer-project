import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Vendor from './components/Vendor';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
   <Router>
      <div className="container">
        <Navbar />
        <Switch>
            <Route exact path="/">
               <Login />
            </Route>
        </Switch>
        <Switch>
            <Route  path="/register">
               <Register />
            </Route>
        </Switch>
        <Switch>
            <Route  path="/vendor">
               <Vendor />
            </Route>
        </Switch>
        <Switch>
            <Route  path="/forgot">
               <ForgotPassword />
            </Route>
        </Switch>
    </div>
   </Router>
  );
}

export default App;
