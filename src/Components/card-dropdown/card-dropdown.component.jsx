import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import { selectCartItems} from '../../redux/cart/cart.selectors.js';
import {createStructuredSelector} from 'reselect';
import './card-dropdown.styles.scss';


const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className ='cart-items'>
    
    {cartItems.map(cartItem =>  (<CartItem key ={cartItem.id} item= {cartItem}/>
      ))}

    </div>
   
      <CustomButton >GO TO CHECKKOUT</CustomButton>
   
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);
