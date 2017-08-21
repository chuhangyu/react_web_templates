import React, { Component } from 'react';
import App from '../pages/App';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';
import './CoverDefault.less';


export default class APP extends Component {
  render() {
    return (
      <div style={{ height: '100%', width: "100%" }}>
        <App />
      </div>
    )
  }
}