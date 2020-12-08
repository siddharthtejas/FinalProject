import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './instruction.css';

class Instruction extends Component
 {
   render()
     {
       return (
          <div>
             
               <div className="Nav-bar">

                  
                 <Link to='/homepage'>
                   <li className="nav-link">Homepage</li>
                 </Link>
                 <Link to='/details'>
                   <li className="nav-link">Details Page</li>
                 </Link>
                 <Link to='/login'>
                   <li className="nav-link">Login</li>
                 </Link>
                 <Link to='/login'>
                   <li className="nav-link">Sign Up</li>
                 </Link>
                 
               </div>

               <div className="container-fluid ">
        <img src="https://i.postimg.cc/JnVgPrnw/lunch.png" className="img-fluid image" alt="Image not fount"/>

                  </div>
              

          </div>
        );
      }
    }

export default Instruction;

