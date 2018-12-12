import React, { Component } from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import { GoogleLogin } from 'react-google-login';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../App.css';
import { BrowserRouter as Router, NavLink} from "react-router-dom";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavbarToggler, Collapse } from "mdbreact";
import newEvent from './newEvent';
import {
    Link,
    Route
} from "react-router-dom"; 
const localizer = BigCalendar.momentLocalizer(moment);

export default class Dashboard extends Component {

  selectSlot = ({start, end}) => {
    const title = window.prompt('New Event Name')
    if (title) {
      this.setState( {
        events: [
          ...this.state.events, {
            start,
            end,
            title
          },
        ],
      })
    }
  }

  render() {
    const events = []
    return ( 
      <Router>
        {/* only one child element */}
        <div>
        {/* Navigation */}
        <Navbar color="stylish-color-dark" dark expand="md">
          <NavbarBrand>
            <strong color="blue-grey darken-3">WeFree</strong>
          </NavbarBrand>
        </Navbar>
        {/* End Navigation */}
      <div className="landing">
        <div className="container-fluid">
          <div className="h-100 p-5">
            <h1>hey bb u free?</h1>
            {<Link to='/newEvent'><button>Create Event</button></Link>}
          </div>
        </div>
      </div>


      {/* calender timeee */}
        <div style={{ height: 600 }}>
          <BigCalendar
            selectable
            localizer={localizer}
            events={events}
            step={30}
            defaultView='week'
            views={['month','week','day']}
            defaultDate={new Date()}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent= {event => alert(event.title)}
            onSelectSlot = {this.selectSlot}
          />
        </div>
      </div>
      </Router>
    );
  }
}