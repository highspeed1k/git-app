import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
<<<<<<< HEAD
      <li>a todo will go here</li>
=======
      <li>
          <input type="checkbox" checked={ this.props.isCompleted } />
          <span>{ this.props.description }</span>
      </li>
>>>>>>> check-state-props
    );
  }
}

export default ToDo;
