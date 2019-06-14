import React from 'react';
import Navbar from '../Navbar';
import OrderCheck from '../Take_order/OrderCheck';
import MenuOptions from '../Take_order/MenuOptions';
import { Col } from 'react-bootstrap';

class TakeOrder extends React.Component {
  render() {
    return (
      <div>
        <article>
          <Navbar />
        </article>

        <div className="row">
          <Col md={8}>
            <article>
              <MenuOptions />
            </article>
          </Col>
          <Col md={4}>
            <article>
              <OrderCheck options={this.addItem} />
            </article>
          </Col>
        </div>
      </div>
    );
  }
}

export default TakeOrder;
