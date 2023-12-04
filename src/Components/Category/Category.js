import React from "react"
import ReceivingData from "./ReceivingData"
import Data from "./Data"


const Category = () => {
    return (
        <>
       <div className="head">SHOP BY CATEGORY</div>
        <div className="Category-container">
            {Data.map((value, index) => {
                return (
                    <ReceivingData  
                    key = {index}
                    backgroundImges = {value.backgroundImges}
                    url = {value.url}
                    type = {value.type}
                    discount = {value.discount}
                    now = {value.now}
                    />
                )
            })}
        </div>
        </>
    )
}
export default Category;