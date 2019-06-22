import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import List from './List'
import Add from './Add'
import Edit from './Edit'


export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/contacts' component={List} />
                <Route exact path='/addcontact' component={Add} />
                <Route exact path='/editcontact/:id' render={(props) => <Edit cin={props.match.params.id} />} />
            </div>);
    }
}