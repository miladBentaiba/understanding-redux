import React, { Component } from 'react';
import Item from './contactitem'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1>Contact List</h1>
            <div className="contactlist">
                {
                    this.props.contred.map((el,i)=><Item key={i} item={el} />)
                }
            </div>
            <Link to="/">
                <button >Home</button>
            </Link>
            
            
        </div> );
    }
}


const mapStateToProps=(state)=>{
    return{
        contred: state.reducerContacts
    }
}

export default connect(mapStateToProps)(List);