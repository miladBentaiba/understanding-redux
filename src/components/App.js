import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div className="App">
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div> );
  }
}
 
export default App;

