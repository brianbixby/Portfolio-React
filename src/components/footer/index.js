import React from 'react';
import { connect } from 'react-redux';
import { isEmail } from 'validator';

import { messageCreateRequest } from '../../actions/message-actions.js';
import Tooltip from '../tooltip';
import { classToggler } from './../../lib/util.js';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      name: '',
      message: '',
      emailError: null,
      nameError: null,
      messageError: null,
      error: null,
      focused: null,
      submitted: false,
      userSuccess: false,
      userSuccessMessage: ''
    };
  }
  componentWillUnmount() {
    this.setState({ name: '', email: '', message: '', userSuccess: false, userSuccessMessage: '' });
  }
  validateInput = e => {
    let { name, value } = e.target;

    let errors = {
      emailError: this.state.emailError,
      messageError: this.state.messageError,
      nameError: this.state.nameError,
    };

    let setError = (name, error) => errors[`${name}Error`] = error;
    let deleteError = name => errors[`${name}Error`] = null;

    if(name === 'email') {
      if(!value)
        setError(name, `${name} can not be empty`)
      else if(!isEmail(value))
        setError(name, `${value} is not a valid email`)
      else
        deleteError(name)
    }

    if(name === 'name' || name === 'message') {
      if(!value)
        setError(name, `${name} can not be empty`)
      else 
        deleteError(name)
    }

    this.setState({
      ...errors, error: !!(errors.emailError || errors.nameError || errors.messageError),
    })
  };
  handleFocus = e => this.setState({ focused: e.target.name});
  handleBlur = e => {
    let { name } = e.target;
    this.setState(state => ({
      focused: state.focused === name ? null : state.focused,
    }))
  };
  handleChange = e => {
    let { name, value } = e.target;
    this.validateInput({...e});

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if(!this.state.error) {
      this.props.messageCreate(this.state)
        .then(() => {
          this.setState({ name: '', email: '', message: '', userSuccessMessage: 'Success, Message sent.' });
          return this.handleUserSuccess();
        })
        .catch(err => {
          this.setState({ 
            error: err,
            submitted: true,
            userSuccessMessage: 'An Error occurred while sending your message.'
          });
          return this.handleUserSuccess();
      });
    }
    this.setState(state => ({
      submitted: true,
      nameError: state.nameError || state.name ? null : 'required',
      emailError: state.emailError || !isEmail(state.email) ? `${state.email} is not a valid email` : null,
      messageError: state.messageError || state.message ? null : 'required',
    }))
  };

  handleUserSuccess = () => {
    this.setState({ userSuccess: true });
    setTimeout(() => this.setState({ userSuccess: false }), 5000);
  };

  render() {
    let { focused, submitted, emailError, messageError, nameError } = this.state;
    return (
    <div>
      <div className='footerWrapper'>
        <div className='container'>
          <div className='footerTitleWrapper'>
            <p> Get in touch </p>
          </div>
          <div className='footerFormWrapper'>
            <form onSubmit={this.handleSubmit}>
              <input
                className={classToggler({error: emailError})}
                type='text'
                name='email'
                placeholder='Email Address'
                value={this.state.email}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              />
              <Tooltip message={emailError} show={focused === 'email' || submitted} />
              <input
                className={classToggler({error: nameError})}
                type='text'
                name='name'
                placeholder='Name (First and Last)'
                value={this.state.name}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              />
              <Tooltip message={nameError} show={focused === 'name' || submitted}/>
              <textarea
                className={classToggler({error: messageError})}
                type='text'
                name='message'
                placeholder='Message...'
                value={this.state.message}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              ></textarea>
              <Tooltip message={messageError} show={focused === 'message' || submitted}/>
              <button type='submit'> Submit </button>
            </form>
          </div>
        </div>
        <div
          className={classToggler({
            sliderPopup: true,
            clozed: this.state.userSuccess,
          })}
          onClick={() => this.setState({ userSuccess: false })}
        >
          <p>{this.state.userSuccessMessage}</p>
        </div>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ messageCreate: message => dispatch(messageCreateRequest(message)) });

export default connect(null, mapDispatchToProps)(Footer);