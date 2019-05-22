import React from 'react';

class OrderCheck extends React.Component {
  render() {
    return (
      <element>
        <h2>Pedido</h2>
        <form>
          <label htmlFor="name">
            Nombre
            <input id="name" name="name" type="name" placeholder="Client Name" />
          </label>
        </form>
        <button type="button">Enviar a cocina</button>
      </element>
    );
  }
}

export default OrderCheck;
