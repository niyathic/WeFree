import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
require("react-big-calendar/lib/css/react-big-calendar.css");

BigCalendar.momentLocalizer(moment);

class Calender extends Component {
  constructor () {
    super();
    this.state = {
      events: [],
      title: "",
      start:"",
      end:"",
      desc: "",
      openSlot: false,
      openEvent: false,
      clickedEvent: {}
    };
    this.handleClose = this.handleClose.bind(this);
  }
  //close modal
  handleClose() {
    this.setState({openEvent: false, openSlot: false})
  }

  //clickable
  handleSlotSelected(slotInfo) {
    this.setState({
      title:"",
      desc:"",
      start: slotInfo.start,
      end: slotInfo.end,
      openSlot : true
    });
  }

  handleSelectedEvent(event) {
    this.setState({
      openEvent: true,
      clickedEvent: event,
      start: event.start,
      end: event.end,
      title: event.title,
      desc: event.desc
    });
  }

  setTitle(e) {
    this.setState({title:e})
  }
  setDesc(e) {
    this.setState({desc:e})
  }
  setStartTime = (event, date) => {
    this.setState({start:date})
  }

  setEndTime = (event, date) => {
    this.setState({end:date})
  }

  //push new appt to event obj
  //push to database when linked?
  setNewEvent() {
    const {start, end, desc, title} = this.state;
    let nEvent = { title, start, end, desc};
    let events = this.state.events.slice();
    events.push(nEvent);
    this.setState({events});
  }

  editEvent() {
    const { title, desc, start, end, events, clickedEvent} = this.state;
    //find index of event w arrow func
    const index = events.findIndex(event => event === clickedEvent);
    const editedEvent = events.slice();
    //set each prop to edited version
    editedEvent[index].title = title;
    editedEvent[index].desc = desc;
    editedEvent[index].start = start;
    editedEvent[index].end = end;
    //set that state, baby
    this.setState({
      events : editedEvent
    });
  }
  
  deleteEvent() {
    let editedEvents = this.state.events.filter(
      event => event['start'] !== this.state.start
    );
    this.setState({ events: editedEvents});
  }




}