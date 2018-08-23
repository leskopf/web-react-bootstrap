import React from 'react';


import './ContactForm.css';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      message: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event);
  }

  handleSubmit(event) {
    console.log('Formular byl odeslan: ' + this.state.value);
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Your name
          <input
            name="name"
            type="text"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Your email
          <input
            name="email"
            type="email"

            onChange={this.handleChange}
           />
        </label>
        <br/>
        <label>
          Message:
          <textarea  onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}