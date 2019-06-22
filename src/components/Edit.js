import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', phone: '', email: '' }
    }
    handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

    componentDidMount() { this.setState({ ...this.props.contacts.filter((el) => el.id === this.props.cin)[0] }) }

    edit = () => { this.props.editRed(this.state) }

    render() {
        return (
            <div>
                <h2>Edit contact</h2>
                <h4>name :</h4>
                <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
                <h4>phone :</h4>
                <input type='number' name='phone' onChange={this.handleChange} value={this.state.phone} />
                <h4>email :</h4>
                <input type='email' name='email' onChange={this.handleChange} value={this.state.email} />
                <br />
                <Link to='/contacts'>
                    <button onClick={this.edit}>Edit</button>
                </Link>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.reducerContacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editRed: editcontact => {
            dispatch({
                type: 'EDIT_CONTACT',
                editcontact
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);