import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { deleteItemtoOrder } from '../../actions/waiter';


class OrderCheck extends React.Component {

    state = {
      clientName: '', // Inicializamos el estado para que no salga error de cambio de controlado a no controlado
      
    };


  //  handleChange = e =>{
  //   // console.log({
  //   // name: e.target.name,
  //   //   value: e.target.value,
  //   // });  
  //   this.setState({
  //     [e.target.name]:e.target.value     // para que generalice el nombre donde guarda el valor
    //  })
  // };
  
   handleClick = (name) => {
     console.log("Button was clicked");
     console.log(this.state);  
   };

   handleDelete = (item) => {
     this.props.delete(item);
   }

   render() {
     return (
      <element>
        <h2>Pedido</h2>
        <Table>
          <tbody>
            {this.props.waiter.order.map(item =>
              <tr>
                <td>{item.name}</td>
                <td className="text-right">${item.price}</td>
                <td className="text-right"><button onClick={() => this.handleDelete(item)}><FontAwesomeIcon icon={faTimes}/></button></td> 
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">
                Total: $
                {this.props.waiter.order.reduce((sum, item) => sum + item.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>
        <form>
          <label htmlFor="name">
            Nombre
            <input className="sendOrder" onChange={this.handleChange} value={this.state.clientName} id="name" name="clientName" type="text" placeholder="Nombre del cliente" />
          </label>
        </form>
        <button onClick={this.handleClick} type="button">Enviar a cocina</button>
      </element>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: deleteItemtoOrder(dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderCheck);
