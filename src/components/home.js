import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1>Home Page</h1>
            <Link to='/contacts'>
                <button>Contact List</button>
            </Link>
            <Link to='/addcontact'>
                <button>Add Contact</button>
            </Link>
        </div> );
    }
}
 
export default Home;