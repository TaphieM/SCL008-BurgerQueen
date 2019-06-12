import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import menu from '../../data/menu.json';
import { addItemtoOrder } from '../../actions/waiter';

class BreakfastItems extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add(item) {
    this.props.add(item)
  }

  sandwiches() {
    const breakfastFood = menu.breakfastFood.map((item) => (
        <Button className="itembutton" name={item.name} options={() => { this.add(item); }} />
      ));
    return breakfastFood;
  }

  drinks() {
    const breakfastDrinks = menu.breakfastDrinks.map((item) => (
        <Button className="itembutton" name={item.name} options={() => { this.add(item); }} />
      ));
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
