import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Ride from './Components/Ride/Ride';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SignUp from './Components/SignUp/SignUp';
import Blog from './Components/Blog/Blog';
import ConfirmRide from './Components/ConfirmRide/ConfirmRide';

export const UserContext= createContext();

function App() {
  const [loggedInUser,setLoggedInUser]= useState({});
  
  return (
    <div className="App bg-image">
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]} >
      <Router>
      
      <Header></Header>
        <Switch>
        
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/ride/:type">
            <Ride></Ride>
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <Ride></Ride>
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <Blog></Blog>
          </PrivateRoute>
          
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
