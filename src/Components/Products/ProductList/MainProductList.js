import React from "react"
import './ProductList.css'
import ProductList from "./ProductList"
import ProductListData from "./ProductListData"

const MainProductList = (props) => {

    return (
        <>
            {ProductListData
            .filter((value) => {
                if(value.name === "") {
                    return value;
                } else if (value.name.toLowerCase().includes(props.inputValue.toLowerCase())) {
                    return value;
                }
            })
   
            .map((value, index) => {
                return (
                    <ProductList

                        key={index}
                        url={value.url}
                        backgroundImagez={value.backgroundImagez}
                        ratings={value.ratings}
                        line={value.line}
                        views={value.views}
                        name={value.name}
                        details={value.details}
                        price={value.price}
                        discount={value.discount}
                        offer={value.offer}
                    />
                )
            })}
        </>
    );
};

export default MainProductList;