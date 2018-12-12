import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class SignUp extends Component {
  render () {
    return (
      <Router>
         <div>
          <div className="md-form form-lg">
          <form method="POST">
            <input type="text" name="name" id="form0" class="form-control form-control-lg" />
            <label for="form0">Name</label><br/>

            <input type="text" name="email" id="form1" class="form-control form-control-lg" />
            <label for="form1">Email</label><br/>

            <input type="password" name="password"id="form2" class="form-control form-control-lg" />
            <label for="form2">Set Password</label><br/>

            <Link to="/dashboard"><button type="submit">Sign Up</button></Link>
            </form>
          </div>
        </div>
      </Router>
    )
  }
}