import React, { Component } from 'react';
import './Button.css'

class Button extends Component {

  render() {
  	let buttonStyle = this.props.style ;
    return (
    	<button className={buttonStyle} type="button">BUTTON</button>
    );
  }
}

Button.defaultProps = {
  style: 'mid'
};

export default Button;
