import React from "react"
import './ProductList.css'
import ProductList from "./ProductList"
import ProductListData from "./ProductListData"


const MainProductList = (props) => {
    return (
    <>
        {ProductListData
            .filter((value) => {
              return value.name === "" || value.name.toLowerCase().includes(props.inputValue.toLowerCase());
            })
            .map((value, index) => {
              return (
                <ProductList
                  key={index}
                  id={value.id}
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
              );
            })}
          </>
    );
};

export default MainProductList;