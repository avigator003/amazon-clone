import React from 'react'
import './Header.css'
import {Search, ShoppingBasket} from '@material-ui/icons';
import { Link ,useHistory} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Database';

function Header() {
    
    const history=useHistory();
const[{basket,user},dispatch]=useStateValue();
const handleauthentication=()=>{
    if(user)
    {
        auth.signOut();
        history.push("/login")
    }
}
    return (
        <div className="header">
            <Link to="/">
           <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/></Link>
            <div className="header__search">
            <input type="text" className="header__searchinput"/>
              <Search className="header__searchicon"/> 
            </div>

            <div className="header__nav">
            <Link to='/login'>

                <div className="header_option" onClick={handleauthentication}>
    <span className="header__optionLineOne">Hello {user?user.email:"Guest"}</span>
                <span className="header__optionLineTwo">{user?'Sign out':'Sign in'}</span>
                </div>
                </Link>

                <div className="header_option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                
                <div className="header_option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

            </div>

           <Link to="/checkout">
               <div className="header__optionBasket">
                   <ShoppingBasket/>
                    <span className="header__basketCount">{basket.length}</span>
                </div>
            </Link>
            
        </div>
    )
}

export default Header
