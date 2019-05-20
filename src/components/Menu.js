import React from 'react';
import Button from './Button';


class Menu extends React.Component { 
    breakfastMenu(){
        ReactDom.render(<Breakfast/>, document.getElementById('containerMenu'))
       
    }
    dinnerMenu(){
        console.log("Dinner")
    }

    render(){
     return(
      <div>
        <Button options="Desayuno"  menus={this.breakfastMenu} />
        <Button options="Comida/Cena" menus={this.dinnerMenu} />
        
      </div>
      <div id="showMenuItems"></div>
     );
    }
}


export default Menu;
 

