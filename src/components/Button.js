import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.menus();
    };


render(){

return(

<button type="button" onClick={this.handleClick} >{this.props.options}</button>

)
};
}
 


export default Button;


/* class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <button className="square" onClick={() => alert('click')}>
          {this.props.value}
        </button>
      );
    }
  } */