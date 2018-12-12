import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { Component } from "react";

export default class LogIn extends Component {
  render () {
    return (
      <Router>
        <div>
          <div className="md-form form-lg">
            <form method="POST">
              <input type="text" id="form1" class="form-control form-control-lg" />
              <label for="form1">Email</label><br/>
              
              <input type="password" id="form2" class="form-control form-control-lg" />
              <label for="form2">Password</label><br/>

              <Link to='/dashboard'><button>Log in</button></Link>
            </form>
          </div>
        </div>
      </Router>
    )
  }
}