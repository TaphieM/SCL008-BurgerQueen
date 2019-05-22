import React from 'react';
import Button from '../Button';
import menu from '../../data/menu.json';

class BreakfastItems extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }
 
  addItem() {
    this.props.addtoOrder();
  }

  sandwiches() {
    const breakfastFood = menu.breakfastFood.map((Item) => {
      return (
        <Button name={Item.name} buttonOnClick={() => { this.addItem(Item) }} />
      );
    });
    return breakfastFood;
  }

  drinks() {
    const breakfastDrinks = menu.breakfastDrinks.map((Item) => {
      return (
        <Button name={Item.name} buttonOnClick={() => { this.addItem(Item) }} />
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

export default BreakfastItems;
