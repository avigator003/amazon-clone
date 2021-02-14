import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
function Checkout() {

 const[{basket,user},dispatch]=useStateValue();
 
 const amount=basket.map(bas=>bas.price)
 const subtotal=amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
 
console.log("subtotal",subtotal)
    return (
        <div className="checkout">
         <div className="checkout__left">
           <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
         <h2 className="checkout__title">
             Your Shopping Basket  {user?user.email:"Guest"}
         </h2>

             {
                 basket.map(bas=>(
                  <CheckoutProduct title={bas.title} price={bas.price} image={bas.image} rating={bas.rating} id={bas.id}/>
                 ))
             }

         </div>
         
         <div className="checkout__right">
          <Subtotal items={basket.length} subtotal={subtotal}/>
         </div>

        </div>
    )
}

export default Checkout
