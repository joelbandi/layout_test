import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { SmartNotes } from "./SmartNotes"
import { VideoCall } from "./VideoCall"
import { Main } from "./Main"

import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/appointment/:appointmentId/visit-notes" component={SmartNotes} />
        <Route path="/appointment/:appointmentId/video-call" component={VideoCall} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
