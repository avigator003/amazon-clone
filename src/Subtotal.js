import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom'
function Subtotal({subtotal,items}) {
    const history=useHistory();
    return (
        
        <div className="subtotal">
            <CurrencyFormat
         
        
            decimalScale={2}
            value={subtotal}
            displayType="text"
            prefix={"$"}
            thousandSeperator="true"
            renderText={value => <div>
                
               <p>
            Subtotal ( {items} items): <strong>$ {subtotal}</strong>
             </p>
             <small className="subtotal__gift">
                 <input type="checkbox"/>This order contains a gift

             </small>
            </div>}
            
            
            />
            <button onClick={e=>history.push("/payment")}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
