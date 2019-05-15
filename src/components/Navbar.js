import React from 'react';
import logoBQ from '../images/logoBQ.svg';  //createreactapp se encarga de empaquetar la imagen en la var logoBQ
import '../styles/Navbar.css';

//en img src no se puede dar un 'string'en cambio ponemos en {props} la var de la imagen para que la evalue
//para dar estilo siempre utilizar className
//la creación de componentes con class se usa preferentemente cuando el componente tiene
class Navbar extends React.Component{
render(){
    return <nav className="nav">
       <div className="col-2">
          <figure className="logo">
            <img src={logoBQ} alt="BurgerQueenlogo"/>      
          </figure>
       </div>
       <div className="col-10">
         <ul className="options">
           <li><a href="menu">Menu</a></li>
           <li><a href="orders">Pedido</a></li>
           <li><a href="records">Historial</a></li>
         </ul>
        </div>  
    </nav>;
    //agregar un div vació para irlo rellenado con las pantallas de pedidos
}

}

export default Navbar;
