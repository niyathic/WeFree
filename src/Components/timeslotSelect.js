import ScheduleSelector from 'react-schedule-selector';
import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import DRP from '../Components/datepicker'

export default class TimeslotSelect extends Component {
  state = { schedule: [] }

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
    //schedule is array list of dates that are filled in...
  }

  render() {
    return (
      <Router>
        <div>
          <ScheduleSelector
            selection={this.state.schedule}
            startDate={DRP.startDate}
            endDate={DRP.startDate}
            numDays={5}
            minTime={8}
            maxTime={22}
            onChange={this.handleChange}
            selectedColor = {'rgb(252, 228, 236)'}
          />
        </div>
      </Router>
    )
  }
}