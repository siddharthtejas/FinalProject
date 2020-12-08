 import React from 'react';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Details from "./Details";
import Homepage from "./Homepage";
import Instruction from "./Instruction";
import Login from "./Login";
import SignUp from "./SignUp";



function App() {
  return (
    
       
    <Router>
      <div>
      <Switch>
         <Route path="/" exact component={Instruction}/>
         <Route path="/homepage" exact component={Homepage}/>
         <Route path="/details" exact component={Details}/>
         <Route path="/login" exact component={Login}/>
         <Route path="/signup" exact component={SignUp}/>
         
        
            
      </Switch>

      </div>
    
  </Router>
   
  );
}

export default App;
