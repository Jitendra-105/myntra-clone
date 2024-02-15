import React from "react"
import './ProductList.css'
import { AiFillStar } from "react-icons/ai"

import { Link } from "react-router-dom"


const ProductList = (props) => {
    return (
        <>
            <div className="products-container">

                <div className="product-card-container">
                <Link to = {`/ProductInfo/${props.id}`}> <div className="background-container" style={{ backgroundImage: `url(${props.backgroundImagez})` }}>
                        <div className="ratings-container">
                            <div className="rate">{props.ratings}<span><AiFillStar className="star" /></span></div>
                            <div>{props.line}</div>
                            <div className="views">{props.views}</div>
                        </div>
                    </div></Link>
                    <h6>{props.name}</h6>
                    <p>{props.details}</p>
                    <div className="price-container"><strong>{props.price}</strong><span className="discounted-price">{props.discount}</span><span className="offer">{props.offer}</span></div>
                </div>
            </div>
</>

    )
}

export default ProductList;