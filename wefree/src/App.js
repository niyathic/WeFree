import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import { GoogleLogin } from 'react-google-login';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
const localizer = BigCalendar.momentLocalizer(moment);
// const resGoogle = (response) => {
//   console.log(response);
// }
class App extends Component {
  //select time logic
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
//navbar collapse
  state = {
    isOpen: false
  };
  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

render() {
    const cal_events = []
    return ( 
      <div className="App">
      {/* navbar */}
      <Router>
        <Navbar color="stylish-color-dark" dark expand="md">
          <NavbarBrand>
            <strong color="blue-grey darken-3">WeFree</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav right>
              <NavItem active><NavLink to="!#">Log Out</NavLink></NavItem>
            </NavbarNav>
          </Collapse>
          </Navbar>
          </Router>
        <div className="container-fluid">
          <div className="h-100 p-5">
            <h1>hey bb u free?</h1>
          </div>
        </div>


      {/* calender timeee */}
        <div style={{ height: 600 }}>
          <BigCalendar
            selectable
            localizer={localizer}
            events={cal_events}
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
    );
  }
}
export default App;
