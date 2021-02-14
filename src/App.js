import React,{useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Login'
import Header from './Header'
import Home  from './Home'
import Checkout from './Checkout'
import { auth } from './Database'
import { useStateValue } from './StateProvider'
import "./App.css"
import Payment from './Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
function App() {

    const promise=loadStripe('pk_test_51HQVQgFWwGxpqltYu4Q3ld31L0kOz41v1BvnH8kqhyrp7tstfyEB3DsvAjDFhmfO6ZcYfW68pacTlSscLuCM2uOI00L35Lv4zC')

    const[state,dispatch]=useStateValue();

    useEffect(()=>{
        auth.onAuthStateChanged((authUser)=>{
            if(authUser)
            {
                
    dispatch({
        type:"SET_USER",
        user:authUser
        
    })
            }
            else{

                dispatch({
                    type:"SET_USER",
                    user:null
                    
                })
            }
            })
   
    },[])
    return (
             <Router>    
          <div className="App">
        
        <Route path="/login">
           <Login/>
        </Route>


        <Route path="/"exact >
        <Header></Header>
        <Home/>
        </Route>
        <Route path="/checkout">
        <Header></Header>
        <Checkout></Checkout>
        </Route>

<Route path="/payment">
<Header></Header> 
<Elements stripe={promise}>
<Payment></Payment></Elements>
</Route>
             </div>
             </Router>

    )
}

export default App
