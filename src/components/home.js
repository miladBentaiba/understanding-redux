import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Link to='/contacts'>
                    <button>Contact List</button>
                </Link>
                <Link to='/addcontact'>
                    <button>Add Contact</button>
                </Link>
            </div>);
    }
}