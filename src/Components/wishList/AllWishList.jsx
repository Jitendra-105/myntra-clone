import React from 'react';
import "./wishList.css"
import { useDispatch, useSelector } from 'react-redux';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { removeFromWishlist } from '../../app/slice';


const AllWishlist = () => {
  const wishlist = useSelector((state) => state.addProducts.wishlist);
  const dispatch = useDispatch()

  const handleRemoveList = (productId) => {
        dispatch(removeFromWishlist(productId))
  }

  return (
    <div className="wishlist-container">
      {wishlist.map((product) => (
        <div key={product.id} className="wishlist-item">
          <div className="wishlist-img">
            <img src={product.backgroundImagez} alt="" />
            <IoIosCloseCircleOutline className='wishlist-close-icon' onClick={() => handleRemoveList(product.id)} />
            
          </div>
          <div className="wishlist-details">
            <h3>{product.name}</h3>
            <p>{product.details}</p>
            <h4>{product.price}</h4>
            <p>14 days return policy</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllWishlist;