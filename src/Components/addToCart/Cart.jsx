import React from 'react'
import "./cart.css"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../app/slice';

const Cart = () => {
    const dispatch = useDispatch()
    const cartLists = useSelector((state) => state.products.cartItems)

    const removefromCart = (itemsId) => {
        dispatch(removeFromCart(itemsId))
    }

  return (
   <div className="cart-container-section">
    {cartLists.map((items) => (
          <div className='cart-subcontainer' key={items.id}>
          <div className="cart-left-section">
              <div className="cart-left-img">
                  <img src={items.backgroundImagez} alt="" />
              </div>
              <div className="cart-right-details">
                  <h4>{items.name}</h4>
                  <p>{items.details}</p>
                  <p><strong>{items.price}</strong></p>
                  <p>14 days return policy</p>
              </div>
              <IoIosCloseCircleOutline className='cart-close-icon' onClick={() => removefromCart(items.id)}/>
          </div>
          <div className="cart-right-section">
              <div className="price-details-cart">
                  <div className="cart-price-container">
                  <p>Total MRP</p>
                  <p>2,299</p>
                  </div>
                  <div className="cart-price-container">
                  <p>Discount on MRP</p>
                  <p>-100</p>
                  </div>
                  <div className="cart-price-container">
                  <p>Total Amount</p>
                  <p>1,000</p>
                  </div>
                  <button className='placeOrder'>PLACE ORDER</button>
              </div>
          </div>
          </div>
    ))}
   </div>
  )
}

export default Cart;