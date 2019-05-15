import React from 'react';
import Navbar from '../components/Navbar';
import OrderCheck from '../components/OrderCheck';
import Menu from '../components/Menu';

class TakeOrder extends React.Component{
    render(){
        return (
        <div>
            <article>
                <Navbar />
            </article>

            <div className="row">
               <div className="col-8">
                 <article>
                    <Menu />
                 </article> 
               </div>
                <div className="col-4">
                  <article>
                    <OrderCheck />
                  </article>
                </div>
            </div>
        </div>
        )

        
    }
}

export default TakeOrder;


