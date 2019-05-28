import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Button';
import menu from '../../data/menu.json';
import OrderCheck from './OrderCheck';

class BreakfastItems extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }
 
  addItem(item) {
    ReactDom.render(<OrderCheck  item={item} />, document.getElementById('confirmOrder'));
  }

  sandwiches() {
    const breakfastFood = menu.breakfastFood.map((Item) => {
      return (
        <Button className="itembutton" name={Item.name} options={() => { this.addItem(Item) }} />
      );
    });
    return breakfastFood;
  }

  drinks() {
    const breakfastDrinks = menu.breakfastDrinks.map((Item) => {
      return (
        <Button className="itembutton" name={Item.name} options={() => { this.addItem(Item) }} />
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
