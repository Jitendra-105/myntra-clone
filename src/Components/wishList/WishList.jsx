import React, {useEffect} from 'react'
import "./wishList.css"
import { useSelector, useDispatch } from 'react-redux'
import ProductListData from '../Products/ProductList/ProductListData'
import { productslist } from '../../app/slice'
import { useParams} from "react-router-dom"


const WishList = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.productList)
  const productDetails = product.find((product) => product.id.toString() === id); 


  
 useEffect(() => {
  dispatch(productslist(ProductListData));
}, [dispatch]);
  return (
   <div className="wishlist-container">
    <div className="wishlist-left">
        <img src={productDetails.backgroundImagez} alt="" />
    </div>
    <div className="wishlist-right">
        <h3>{productDetails.name}</h3>
        <p>{productDetails.details}</p>
        <h4>{productDetails.price}</h4>
        <p>14 days return policy </p>
    </div>
   </div>
  )
}

export default WishList;