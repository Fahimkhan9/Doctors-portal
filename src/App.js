import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Appointment from './Components/Appointment/Appointment';
import Home from './Components/Home/Home';

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
     </Switch>
   </Router>
  );
}

export default App;
