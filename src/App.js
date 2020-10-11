import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Appointment from './Components/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route exact path='/appointment'>
         <Appointment/>
       </Route>
       <Route exact path="/login">
         <Login/>
       </Route>
       <Route exact path="/dashboard">
         <Dashboard/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
