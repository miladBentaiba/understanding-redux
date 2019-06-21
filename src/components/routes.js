import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './home'
import List from './contactlist'
import Add from './addcontact'
import Edit from './editcontact'

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/contacts' component={List} />
            <Route exact path='/addcontact' component={Add} />
            <Route exact path='/editcontact/:id' render={(props)=><Edit cin={props.match.params.id} />} />
        </div> );
    }
}
 
export default Routes;