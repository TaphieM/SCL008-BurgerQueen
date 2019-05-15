import React from 'react';
import Button from './Button';


class Menu extends React.Component {
    render(){
     const Menus= ["Desayuno","Comida/Cena"];
     return(
      <div>
         {Menus.map(menu =>
            <Button menu={menu} />
        )}
      </div>
     );
    }
}


export default Menu;