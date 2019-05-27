import React from 'react';
import '../styles/Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.options();
  }

  render() {
    return (
      <button type="button" className={`genericbutton ${this.props.className}`} onClick={this.handleClick}>{this.props.name}</button>

    );
  }
}


export default Button;
