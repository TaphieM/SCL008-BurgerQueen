import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Button from '../Button';
import BreakfastItems from './BreakfastItems';
import LunchItems from './LunchItems';

class MenuCategories extends React.Component {
  BreakfastLetter(category) {
    ReactDom.render(
    <Provider store={store}><BreakfastItems category={category} /></Provider>, document.getElementById('showBitems'));
  }

  LunchLetter(category) {
    ReactDom.render(<Provider store={store}><LunchItems category={category} /></Provider>, document.getElementById('showLitems'));
  }

  breakfast() {
    return (
      <div>
        <div>
          <Button className="categorybutton" name="Sandwiches" options={() => this.BreakfastLetter('Sandwiches')} />
          <Button className="categorybutton" name="Bebidas" options={() => this.BreakfastLetter('Drinks')} />
        </div>
        <div id="showBitems" />
      </div>
    );
  }

  lunch() {
    return (
      <div>
        <div>
          <Button className="categorybutton" name="Hamburguesas" options={() => this.LunchLetter('Hamburgers')} />
          <Button className="categorybutton" name="Acompañamientos" options={() => this.LunchLetter('Accompaniments')} />
          <Button className="categorybutton" name="Bebidas" options={() => this.LunchLetter('Drinks')} />
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
