import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'
function CheckoutProduct({title,price,image,rating,id}) {

    const[state,dispatch]=useStateValue();
const deleteProduct=()=>{
dispatch({
    type:"REMOVE_FROM_BASKET",
    id:id
})
}


    return ( 
    <div className="checkout__product">
        
     <img src={image}/>
    <div className="checkout__productinfo">
     <p className="checkout__producttitle">{title}</p>
     <p className="product__price">
         <small>$</small>
         <strong>{price}</strong>
     </p>
     <div className="checkout__productrating">
         {Array(rating).fill().map((_,i)=> (<p>*</p>))}
      
     </div>
     
     <button onClick={deleteProduct}>Remove From Basket</button>
     </div>
    
</div>
    )
}

export default CheckoutProduct
