//this will be rendered by router
import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/landing';
import Dashboard from './Components/dashboard';
import LogIn from './Components/login';
import SignUp from './Components/signup';
import TimeslotSelect from './Components/timeslotSelect';
import NewEvent from './Components/newEvent';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


class App extends Component {
  render () { 
    const App = () => (
      <div>
         <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/newEvent" component={NewEvent}/>
          <Route path="/timeslotSelect" component={TimeslotSelect}/>
        </Switch>
      </div>
    )
  return (
    <Switch>
    <App/>
    </Switch>
  )
}
}
export default App;