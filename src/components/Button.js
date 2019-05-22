import React from 'react';

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
      <button type="button" onClick={this.handleClick}>{this.props.name}</button>

    );
  }
}


export default Button;
