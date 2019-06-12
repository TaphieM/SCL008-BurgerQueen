import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import menu from '../../data/menu.json';
import { addItemtoOrder } from '../../actions/waiter';


class LunchItems extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add(item) {
    this.props.add(item)
   }
 

  hamburgers() {
    const lunchFood = menu.lunchFood.map((item) => {
      return (
        <Button className="itembutton" name={item.name} options={() => { this.add(item); }} />
      );
    });
    return lunchFood;
  }

  accompaniments() {
    const lunchExtras = menu.lunchExtras.map((item) => {
      return (
        <Button className="itembutton" name={item.name} options={() => { this.add(item); }} />
      );
    });
    return lunchExtras;
  }

  drinks() {
    const lunchDrinks = menu.lunchDrinks.map((item) => {
      return (
        <Button className="itembutton" name={item.name} options={() => { this.add(item); }} />
      );
    });
    return lunchDrinks;
  }

  render() {
    return (
      <div>
        {this.props.category === 'Hamburgers' ? this.hamburgers() : ''}
        {this.props.category === 'Accompaniments' ? this.accompaniments() : ''}
        {this.props.category === 'Drinks' ? this.drinks() : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add : addItemtoOrder(dispatch), 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LunchItems);