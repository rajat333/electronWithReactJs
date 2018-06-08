import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './_helpers';
// import logo from './logo.svg';
import './App.css';
// import Header from "./components/Header/Header";
import My404Component from "./components/404NotFound/My404NotFound";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Register from './components/Register/Register';
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from './components/Profile/Profile';
import Ticket from './components/Ticket/RaiseTicket';
import LogOut from './components/LogOut/LogOut';
import SingleUser from './components/Dashboard/SingleUser/SingleUser';
import userService from "./services/userService";

class App extends Component {

  constructor(props) {
    super(props);
    // documentation https://github.com/ReactTraining/history
   history.listen((location, action) => {
        // clear alert on location change
        // dispatch(alertActions.clear());
        console.log("...location...action...",location,action,userService.isUserLogIn());
      });
}

  componentWillMount(){
    console.log("..component will mount...");
  }

  componentWillReceiveProps(nextProps){
    console.log("...nextProps...",nextProps);
  }
  render() {
    return (
      <div className="App">
        <Router history={history}>
                     <div>
                                <Switch>
                               <PrivateRoute path="/dashboard" component= { Dashboard }> 
                               <PrivateRoute path="/dashboard/:id" component={ SingleUser } />
                                </PrivateRoute>
                               <PrivateRoute path="/profile" component= { Profile }   />
                               <PrivateRoute path="/ticket" component= { Ticket }   />
                               <PrivateRoute path="/logout" component= { LogOut }   />
                               
                               <Route exact path="/" component={Home} />
                               <Route  path="/login" component={ Login } />
                               <Route  path="/contactus" component={ContactUs} />
                               <Route  path="/about" component={AboutUs} />
                               <Route  path="/register" component={Register} />
                               <Route component={My404Component} />
                                </Switch>
                            </div>
                           
                        </Router>
      </div>
    );
  }
}

export default App;
