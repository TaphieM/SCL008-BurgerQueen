import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Button';
import MenuCategories from './MenuCategories';


class MenuOptions extends React.Component {
   MenuItems(category) {
    ReactDom.render(<MenuCategories  category={category} />, document.getElementById('showCategories'));
  }

  render() {
    return (
      <div> 
        <div>                     
          <Button name="Desayuno" options={() => this.MenuItems('Breakfast')} />
          <Button name="Comida/Cena" options={() => this.MenuItems('Lunch/Dinner')} />
        </div>
        <div id="showCategories" />
      </div>

    );
  }
}


export default MenuOptions;
