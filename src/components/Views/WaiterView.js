import React from 'react';
import Navbar from '../Navbar';
import OrderCheck from '../Take_order/OrderCheck';
import MenuOptions from '../Take_order/MenuOptions';

class TakeOrder extends React.Component {
  render() {
    return (
      <div>
        <article>
          <Navbar />
        </article>

        <div className="row">
          <div className="col-8">
            <article>
              <MenuOptions />
            </article>
          </div>
          <div className="col-4">
            <article>
              <OrderCheck options={this.addItem} />
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default TakeOrder;
