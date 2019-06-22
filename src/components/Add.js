import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


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
        addReduc: newcontact => {
            dispatch({
                type: 'ADD_CONTACT',
                newcontact
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Add);