import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios'

// const apiUrl = 'http://lacalhost:3000'

class Add extends Component {
    handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

    render() {
        return (
            <div>
                <h2>Add contact</h2>
                <h4>name :</h4>
                <input type='text' name='name' onChange={this.handleChange} />
                <h4>phone :</h4>
                <input type='number' name='phone' onChange={this.handleChange} />
                <h4>email :</h4>
                <input type='email' name='email' onChange={this.handleChange} />
                <br />
                <Link to='/contacts'>
                    <button onClick={() => { this.props.addReduc({ ...this.state, id: Math.random() * 1000000 + '' }) }}>Add</button>
                </Link>
            </div>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addReduc: newcontact => axios.post('http://localhost:3000/new_contact', 
            {...newcontact}, 
            {headers: {"Access-Control-Allow-Origin": "*", crossDomain: true}})
        .then(response => {
            console.log('then', response.config.data)
          dispatch({
            type: 'ADD_CONTACT',
            newcontact: JSON.parse(response.config.data)
          })
          return JSON.parse(response.config.data)
        })
        .catch(error => {
            console.log('error from user', error)
            throw(error);          
        })
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addReduc: newcontact => {
//             dispatch({
//                 type: 'ADD_CONTACT',
//                 newcontact
//             })
//         }
//     }
// }

export default connect(null, mapDispatchToProps)(Add);