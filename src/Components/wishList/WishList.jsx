import React from 'react'
import wishImage from "../../assets/ethnic/img13.jpg"
import "./wishList.css"

const WishList = () => {
  return (
   <div className="wishlist-container">
    <div className="wishlist-left">
        <img src={wishImage} alt="" />
    </div>
    <div className="wishlist-right">
        <h3>SINGNI</h3>
        <p>Woment Purple Ethnic Motifs</p>
        <h4>$199</h4>
        <p>14 days return policy </p>
    </div>
   </div>
  )
}

export default WishList;