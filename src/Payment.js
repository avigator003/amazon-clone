import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import "./Payment.css"
import Checkout from './Checkout';
import { Link, useHistory } from 'react-router-dom';
import {CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';
function Payment() {


    const history=useHistory();
    const[{user,basket},dispatch]=useStateValue();
    const[error,setError]=useState();
    const[disabled,setDisabled]=useState();
    const[succeded,setSucceded]=useState(false);
    const[processing,setProcessing]=useState("");
    const[clientSecret,setClientSecret]=useState();
    const stripe=useStripe();
    const elements=useElements();
    const amount=basket.map(bas=>bas.price)
    const subtotal=amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    
useEffect(()=>{

const getClientSecret=async ()=>{

    const response=await axios({
        method:"post",
        url:'/payment/create?total=${subtotal}'
    })
    setClientSecret(response.data.clientSecret)
}

getClientSecret();
},[basket])
      


  const handleSubmit= async (event)=>{



  }

  const handleChange=async (e)=>{
      e.setDisabled(e.empty);
      e.setError(e.error?e.error.message:"");
      const payload=await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
              card:elements.getElement(CardElement)
          }
      }).then(({paymentIntent})=>{
          setSucceded(true)
          setError(null)
          setProcessing(false)
          history.replace('/orders')
      })
  }



    return (
        <div className="payment">
            <div className="payment__container">
                
 <h1>   Checkout  
{ 
    <Link to="/checkout">({basket.length} items)</Link>
}
</h1>


                <div className="payment__section">
                     <div className="payment__title">
                         Delivery Address
                     </div>
                     <div className="payment__address">
                         <p>{user?user.email:"Guest"}</p>
                         <p>123 A jaljeera</p>
                         <p>Gandhinagar,Gwalior</p>
                     </div>
                </div>

                <div className="payment__section">
                     <div className="payment__title">
                         Review Items And Delivery
                     </div>
                     <div className="payment__items">

                        {basket.map(item=>(
                            <CheckoutProduct
                            id={item.id}
                            rating={item.rating}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            />
                        ))

                        }

                     </div>
                </div>

                <div className="payment__section">
                     <div className="payment__title">
                         Payment Method
                     </div>
                     <div className="payment__details">
                         <form onSubmit={handleSubmit}>
                             <CardElement onChange={handleChange}/>
                             <div className="payment__priceContainer">
                                   <CurrencyFormat
                                       decimalScale={2}
                                       value={subtotal}
                                       displayType="text"
                                       prefix={"$"}
                                       thousandSeperator="true"
                                       renderText={value => <div>
                                              <p>
                                                Order Total:<strong>$ {subtotal}</strong>
                                              </p>
                                              
                                              </div>}
         
                            />
                            <button disabled={processing||succeded||disabled}><span>{processing?<p>Processing</p>:"Buy Now"}</span></button>
                          {error &&<p>{error}</p>}
                            </div>

                         </form>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
