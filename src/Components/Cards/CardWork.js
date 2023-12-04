import React from "react"
import "./Cards.css"

import Cards from '../Cards/Cards'
import CardData from '../Cards/CardData'

const CardWork = () => {
    return (
        <>
        <div className="heading">UNMISSABLE DEALS!</div>
          <div className="main-container">
            {CardData.map((value, index) => {
                return (
                    <Cards

                        key={index}
                        backgroundImg={value.backgroundImg} // here attribute name and value name must be same
                        images={value.images}
                        details={value.details}
                        price={value.price}
                    />
                )
            })}
        </div>
        </>
      
    )
}
export default CardWork;