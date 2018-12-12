import ScheduleSelector from 'react-schedule-selector';
import React from 'react';
import DateRangePicker from '/datepicker.js';
import { BrowserRouter as Router, Link } from "react-router-dom";

class timeSelect extends React.Component {
  state = { schedule = [] }

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
            startDate={DateRangePicker.startDate}
            endDate={DateRangePicker.startDate}
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