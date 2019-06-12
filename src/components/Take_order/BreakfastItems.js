import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import menu from '../../data/menu.json';
import { addItemtoOrder } from '../../actions/waiter';

class BreakfastItems extends React.Component {
  constructor() {
    super();
    this.state = {
      menu,
    };
  }


  sandwiches() {
    const breakfastFood = this.state.menu.breakfastFood.map((item) => {
      return (
        <Button className="itembutton" name={item.name} options={() => { this.props.add([item]); }} />
      );
    });
    return breakfastFood;
  }

  drinks() {
    const breakfastDrinks = this.state.menu.breakfastDrinks.map((item) => {
      return (
        <Button className="itembutton" name={item.name} options={() => { this.props.add([item]); }} />
      );
    });
    return breakfastDrinks;
  }

  render() {
    return (
      <div>
        {this.props.category === 'Sandwiches' ? this.sandwiches() : ''}
        {this.props.category === 'Drinks' ? this.drinks() : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    ...state,
  });

const mapDispatchToProps = (dispatch) => ({
    add : addItemtoOrder(dispatch), 
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BreakfastItems);
