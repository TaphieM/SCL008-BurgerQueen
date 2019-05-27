import React from 'react';
import Button from '../Button';
import menu from '../../data/menu.json';


class LunchItems extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    this.props.addtoOrder();
  }

  hamburgers() {
    const lunchFood = menu.lunchFood.map((Item) => {
      return (
        <Button className="itembutton" name={Item.name} buttonOnClick={() => { this.addItem(Item) }} />
      );
    });
    return lunchFood;
  }

  accompaniments() {
    const lunchExtras = menu.lunchExtras.map((Item) => {
      return (
        <Button className="itembutton" name={Item.name} buttonOnClick={() => { this.addItem(Item) }} />
      );
    });
    return lunchExtras;
  }

  drinks() {
    const lunchDrinks = menu.lunchDrinks.map((Item) => {
      return (
        <Button className="itembutton" name={Item.name} buttonOnClick={() => { this.addItem(Item) }} />
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


export default LunchItems;
