import React from 'react';      

class OrderCheck extends React.Component {
  render(){
        return(
        <element>
            <h2>Pedido</h2>
            <form>
               <label>Nombre</label>
               <input type="text" name="clientName"></input>
           </form>
           <button>Enviar a cocina</button>
        </element>
        )          
    }
                           
}

export default OrderCheck; 