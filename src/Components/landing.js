import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"; 

//log in - private route

export default class Landing extends Component {
  render () {
    return (
      <Router>
        <div>
      {/* //log in - private route ?*/}
      <h1>WeFree</h1>
      <h2>Many people? No problem. Schedule meetings with ease.</h2>
      <Link to='/account/login'><button>Log in</button></Link>



      {/* //sign up */}
     <Link to='/account/signup'><button>Sign up</button></Link>
      </div>
      </Router>

    )
  }
}



