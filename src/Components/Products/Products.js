import React, {useState} from "react"
import "./Products.css"
import Navbar from '../Navbar/Navbar'
import Filter from "./Filter/Filter.js"
import MainProductList from "./ProductList/MainProductList"
import Footer from "../Footer/Footer"
import Pages from "../Pages/Pages"



const Products = () => {
    const [inputValue, setInputValue] = useState(""); 

    
    return (
        <>

            <Navbar inputValue = {inputValue} setInputValue= {setInputValue}/>
            <div className="main-products-container">

                <div className="top-details-container">
                    <p className="para">Home/<strong>Fusion Wear for Women</strong></p>
                    <p className="para"><strong>Fusion Wear for Women</strong>-321813 items</p>
                    <div className="top-list">
                        <ul>
                            <li>
                                <p>Filters</p>
                            </li>
                            <li>
                                <p>Cear All</p>
                            </li>
                            <li>
                                <select name="" id="">
                                    <option value="">Bundles</option>
                                    <option value="">Single Styles</option>
                                </select>
                            </li>
                            <li>
                                <select name="" id="">
                                    <option value="">All Country</option>
                                    <option value="">India</option>
                                </select>
                            </li>
                            <li>
                                <select name="" id="">
                                    <option value="">s</option>
                                    <option value="">m</option>
                                    <option value="">l</option>
                                </select>
                            </li>
                            <li>
                                <select name="" className="float-right">
                                    <option value="">Popularity</option>
                                    <option value="">What's new</option>
                                    <option value="">recommended</option>
                                    <option value="">Prices:High to Low</option>
                                    <option value="">Prices:Low to High</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="body-container">
                    <Filter />
                    <div className="main-section">
                        <MainProductList inputValue={inputValue}/>
                    </div>
                </div>
                <Pages />
                <Footer />
            </div>

        </>

    )
}
export default Products;