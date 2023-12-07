import React from "react"
import "./Cards.css"

const Cards = (props) => {
    return (
        <>
            
            <div className="container">
                <div
                    className="background-img"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(129, 113, 113, 0), rgba(0, 0, 0, 0.4)), url(${props.backgroundImg})`,
                    }}
                >
                    <div className="logoContainer">
                        <img src={props.images} alt="" />
                    </div>
                    <div className="dash"></div>
                    <div className="details">{props.details}</div>
                    <div className="price">{props.price}</div>
                </div>



            </div>
        </>
    )
}
export default Cards;