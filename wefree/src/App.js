import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';
// moment.locale('en-GB');
const localizer = BigCalendar.momentLocalizer(moment);

class App extends Component {

render() {
    const cal_events = []
    return (
      <div className="App">
        <header>
          <h1>WeFree Calendar</h1>
        </header>
        <div style={{ height: 700 }}>
          <BigCalendar
             localizer={localizer}
             events={cal_events}
             step={30}
            defaultView='week'
            views={['month','week','day']}
            defaultDate={new Date()}
             startAccessor="start"
             endAccessor="end"
          />
        </div>
      </div>
    );
  }
}
export default App;
