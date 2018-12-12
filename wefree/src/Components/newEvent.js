import React, { Component} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class NewEvent extends Component {
  render () {
    return (
      <Router>
        <div>
        <div class="row">
          <div class="col-md-12">
            <div class="md-form mb-0">
              <input type="text" id="eTitle" name="eTitle" class="form-control"/>
              <label for="eTitle" class="">Event Title</label>
            </div>
          </div>
        </div>
        <div class="row">
        <div class="col-md-8">
            <div class="md-form mb-0">
              <input type="text" id="eDesc" name="eDesc" class="form-control"/>
              <label for="eDesc" class="">Event Description</label>
            </div>
          </div>
        </div>
        <DateRangePicker/>
        <Link to='/timeslotSelect'><button>Next</button></Link>
        </div>

      </Router>
    )
  }
}