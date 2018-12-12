import ScheduleSelector from 'react-schedule-selector';
import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
//import DateRangePicker from '../Components/datepicker'

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
            //startDate={DateRangePicker.startDate}
            //endDate={DateRangePicker.startDate}
            startDate={"01011900"} //todo delete
            endDate={"01021900"} //todo delete
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