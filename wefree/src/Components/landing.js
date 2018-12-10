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
      <Link to='/login'><button>Log in</button></Link>



      {/* //sign up */}
     <Link to='/signup'><button>Sign up</button></Link>
      </div>
      </Router>

    )
  }
}



