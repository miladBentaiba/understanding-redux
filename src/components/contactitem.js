import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item}=this.props
        return ( <div className="contact-item-container">
            <h4>Name: {item.name}</h4>
            <h4>Phone: {item.phone}</h4>
            <h4>Email: {item.email}</h4>
            <Link to={`/editcontact/${item.id}`}>
                <button>Edit</button>
            </Link>
            <button onClick={()=>this.props.remReduc(item.id)}>Remove</button>
        </div> );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        remReduc: _id=>{
            dispatch({
                type: 'REMOVE_CONTACT',
                _id 
            })
        }
    }
}
 
export default connect(null, mapDispatchToProps)(Item);