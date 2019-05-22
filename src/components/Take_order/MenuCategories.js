import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Button';
import BreakfastItems from './BreakfastItems';
import LunchItems from './LunchItems';

class MenuCategories extends React.Component {
  BreakfastLetter(category) {
    ReactDom.render(<BreakfastItems category={category} />, document.getElementById('showBitems'));
  }

  LunchLetter(category) {
    ReactDom.render(<LunchItems category={category} />, document.getElementById('showLitems'));
  }

  breakfast() {
    return (
      <div>
        <div>
          <Button name="Sandwiches" options={() => this.BreakfastLetter('Sandwiches')} />
          <Button name="Bebidas" options={() => this.BreakfastLetter('Drinks')} />
        </div>
        <div id="showBitems" />
      </div>
    );
  }

  lunch() {
    return (
      <div>
        <div>
          <Button name="Hamburguesas" options={() => this.LunchLetter('Hamburgers')} />
          <Button name="Acompañamientos" options={() => this.LunchLetter('Accompaniments')} />
          <Button name="Bebidas" options={() => this.LunchLetter('Drinks')} />
        </div>
        <div id="showLitems" />
      </div>
    );
  }


  render() {
    return (
      <div>
        {this.props.category === 'Breakfast' ? this.breakfast() : ''}
        {this.props.category === 'Lunch/Dinner' ? this.lunch() : ''}
      </div>

    );
  }
}
export default (MenuCategories);
