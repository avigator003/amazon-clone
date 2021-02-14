import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
function Product({title,image,price,rating,id}) {

const [{basket},dispatch]=useStateValue();
const addProduct=()=>{
    dispatch({
        type:'ADD_TO_BASKET',
        item:{
          title:title,
          price:price,
          rating:rating,
          image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
          id:id
        }
    })
}

    return (
        <div className="product">
            <div className="product__info">
             <p>{title}</p>
             <p className="product__price">
                 <small>$</small>
                 <strong>{price}</strong>
             </p>
             <div className="product__rating">
                 {Array(rating).fill().map((_,i)=> (<p>*</p>))}
              
             </div>
             </div>
             <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
             <button onClick={addProduct}>Add to basket</button>
            
        </div>
    )
}

export default Product
