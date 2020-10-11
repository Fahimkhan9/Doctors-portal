import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Appointment from './Components/Appointment/Appointment';
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
     </Switch>
   </Router>
  );
}

export default App;
