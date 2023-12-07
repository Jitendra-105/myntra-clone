import React from "react"
import "./ProductInfo.css"
import { AiFillStar } from "react-icons/ai"
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer'
import Similar from "../Similar/Similar"

import img1 from "../../assets/ethnic/img2.1.jpg"
import img2 from "../../assets/ethnic/img2.2.jpg"
import img3 from "../../assets/ethnic/img2.3.jpg"
import img4 from "../../assets/ethnic/img2.4.jpg"

import { AiOutlineRight } from "react-icons/ai"
import { BsHandbagFill } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { CiDeliveryTruck } from "react-icons/ci"
import { MdOutlineLocalOffer } from "react-icons/md"
import {TbListDetails} from "react-icons/tb"
import {FaStarHalfStroke} from "react-icons/fa6"
import {FaStar} from "react-icons/fa"
import {BiLike} from "react-icons/bi"
import {BiDislike} from "react-icons/bi"

const ProductInfo = () => {
    return (
        <>
             <Navbar /> 
            <div className="main-info-container">
                <div className="left-section">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
                 <div className="right-section">
                    <div className="product-details">
                        <h5 className="product-details-h5">Khusal K</h5>
                        <p className="product-details-p">Ethnic Motifs Embroidered Sequined Kurta with Palazzos & Dupatta</p>
                    </div>
                    <div className="rating-container">
                        <div className="rate">4.2 <span><AiFillStar className="star" /></span></div>
                        <div>|</div>
                        <div className="views">2.9k Ratings</div>
                    </div>
                    <hr className="rating-hr" />
                    <div className="product-pricing-section">
                        <div className="info-price-container"><strong className="info-strong">RS.1634</strong><span className="info-discounted-section"> <span className="mrp">MRP</span><span className="info-discounted-price">549</span></span>
                            <span className="info-offer">(70% OFF)</span></div>

                    </div>
                    <div className="tax">inclusive of all taxes</div>

                    <div className="size-container">
                        <div className="sub-size-container">
                            <span className="select-size">
                                SELECT SIZE
                            </span>
                            <div className="size-chart">
                                SIZE CHART <span className="right-arrow">< AiOutlineRight className="arrow-icon" /></span>
                            </div>

                        </div>
                        <ul>
                            <li className="size-list">S</li>
                            <li className="size-list">M</li>
                            <li className="size-list">L</li>
                            <li className="size-list">XL</li>
                            <li className="size-list">XXL</li>
                        </ul>
                    </div>

                    <div className="buttons-container">
                        <div className="buttons cart">
                            <div className="bag-btn"><span className="icon-cont">< BsHandbagFill className="bag-icon" /></span><span className="bag">ADD TO BAG</span></div>
                        </div>
                        <div className="buttons">
                            <div className="wishlist-btn"><span className="icon-cont">< AiOutlineHeart className="wish-icon" /></span><span className="wishlist">Wishlist</span></div>
                        </div>
                    </div>

                    <hr className="rating-hr" />

                    <div className="delivery-container">
                        <h4>Delivery Option <span><CiDeliveryTruck className="delivery-icon" /></span></h4>
                        <input type="number" name="" placeholder="enter pincode" span />
                        <span className="check">Check</span>
                        <p className="delivery-p">Please enter PIN Code to check Delivery Time and Pay on Delivery Availability</p>
                        <div className="delivery-details">
                            <p className="del-details">100% Original Products</p>
                            <p className="del-details">Pay on delivery might be available</p>
                            <p className="del-details">Easy 14 days return and Exchanges</p>
                        </div>
                    </div>

                    <div className="offer-container">
                        <div className="offer-head">
                          <p> <span className="best-offer">BEST OFFERS</span><span>< MdOutlineLocalOffer/></span></p>
                        </div>
                        <div className="best-price-container">

                            <div className="subPrice-container">
                                <h6 className="best-price">Best Price <span className="amount">Rs.1345</span></h6>

                                <div className="subOffer">
                                    <ul className="offer-size">
                                        <li>Coupon Code: <span className="code">MYNTRA300</span></li>
                                        <li>Coupon Discount: Rs. 289 off (check cart for final savings)</li>
                                        <li>Applicable on:Orders above RS. 1699 (only on first purchase)</li>
                                    </ul>
                                    <p className="font-color">View Eligible Products</p>
                                </div>
                            </div>

                            <div className="subPrice-container">
                                <h6 className="bold">10% instant Discount on Kotak Debit & Credit Cards</h6>
                                <div className="subOffer">
                                    <ul>
                                        <li className="sub-font"> Min Spend ₹5,000, Max Discount ₹1,000.. </li>
                                    </ul>
                                    <p className="font-color">Terms & Condition</p>
                                </div>
                            </div>

                            <div className="subPrice-container">
                                <h6 className="bold">10% instant Discount on Kotak Debit & Credit Cards</h6>
                                <div className="subOffer">
                                    <ul>
                                        <li className="sub-font"> Min Spend ₹5,000, Max Discount ₹1,000.. </li>
                                    </ul>
                                    <p className="font-color">Terms & Condition</p>
                                </div>
                            </div>

                            <div className="subPrice-container">
                                <h6 className="bold">10% instant Discount on Kotak Debit & Credit Cards</h6>
                                <div className="subOffer">
                                    <ul>
                                        <li className="sub-font"> Min Spend ₹5,000, Max Discount ₹1,000.. </li>
                                    </ul>
                                    <p className="font-color">Terms & Condition</p>
                                </div>
                            </div>

                            <div className="subPrice-container">
                                <h6 className="bold">10% instant Discount on Kotak Debit & Credit Cards</h6>
                                <div className="subOffer">
                                    <ul>
                                        <li className="sub-font"> Min Spend ₹5,000, Max Discount ₹1,000.. </li>
                                    </ul>
                                    <p className="font-color">Terms & Condition</p>
                                </div>
                            </div>

                            <div className="subPrice-container">
                                <h6 className="bold">10% instant Discount on Kotak Debit & Credit Cards</h6>
                                <div className="subOffer">
                                    <ul>
                                        <li className="sub-font"> Min Spend ₹5,000, Max Discount ₹1,000.. </li>
                                    </ul>
                                    <p className="font-color">Terms & Condition</p>
                                </div>
                            </div>

                            <div className="subPrice-container">
                                <h6 className="bold">10% instant Discount on Kotak Debit & Credit Cards</h6>
                                <div className="subOffer">
                                    <ul>
                                        <li className="sub-font"> Min Spend ₹5,000, Max Discount ₹1,000.. </li>
                                    </ul>
                                    <p className="font-color">Terms & Condition</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <hr className="rating-hr"/>

                    <div className="product-info">

                        <div className="detail-container">
                            <h4>PRODUCT DETAILS <span><TbListDetails className="details-icon"/></span></h4>
                         <p>Purple embroidered Kurta with Plazzos and Dupatta</p>
                        </div>

                        <div className="pro-details">
                            <h5 className="pro-h5">Kurta Design:</h5>
                            <ul className="infor">
                                <li className="infor-list">Ethnic motifs embroidered</li>
                                <li className="infor-list">Anarkali shape</li>
                                <li className="infor-list">Pleated style</li>
                                <li className="infor-list">Round neck, three-quarter regular sleeves</li>
                                <li className="infor-list">Sequined detail</li>
                                <li className="infor-list">Calf length with flared hem</li>
                                <li className="infor-list">Viscose rayon machine weave fabric</li>
                            </ul>
                        </div>

                        <div className="pro-details">
                            <h5 className="pro-h5">Palazzos Design:</h5>
                            <ul className="infor">
                                <li className="infor-list">Bandhani printed Palazzos</li>
                                <li className="infor-list">Elasticated waistband</li>
                                <li className="infor-list">Slip-on closure</li>
                            </ul>
                        </div>

                        <div className="pro-details">
                            <h5 className="pro-h5">Dupatta:</h5>
                            <ul className="infor">
                            <li className="infor-list">Bandhani printed </li>
                            <li className="infor-list">Tasselled border</li>

                               
                            </ul>
                        </div>

                        <div className="pro-details">
                            <h5 className="pro-h5">Size & Fit</h5>
                            <ul className="infor">
                              
                                <li className="infor-list">Dupatta: Length 2.10 meters, Width: 0.88 cm</li>
                                <li className="infor-list">The model (height 5'8) is wearing a size S</li>
                            </ul>
                        </div>

                        <div className="pro-details">
                            <h5 className="pro-h5">Material & Care</h5>
                            <ul className="infor">
                                <li className="infor-list">Kurta: Viscose Rayon</li>
                                <li className="infor-list">Trouser: Viscose Rayon</li>
                                <li className="infor-list">Dupatta: Viscose Rayon</li>
                                <li className="infor-list">Machine Wash</li>
                            </ul>
                        </div>


                    </div>

                    <div className="specification-container">
                        <h4>Specifications</h4>
                        <div className="sub-spec-container">

                            <div className="spec-details">
                            <p className="small">Sleeve Length</p>
                           <p className="big">Three-Quarter Sleeves</p>
                           <hr className="spec-hr"/>
                           </div>

                           <div className="spec-details">
                            <p className="small">Top Shape</p>
                           <p className="big">Anarkali</p>
                           <hr className="spec-hr"/>
                           </div>

                           <div className="spec-details">
                            <p className="small">Top Type</p>
                           <p className="big">Kurta</p>
                           <hr className="spec-hr"/>
                           </div>

                           <div className="spec-details">
                            <p className="small">Bottom Type</p>
                           <p className="big">Palazzos</p>
                           <hr className="spec-hr"/>
                           </div>

                           <div className="spec-details">
                            <p className="small">Dupatta</p>
                           <p className="big">With Dupatta</p>
                           <hr className="spec-hr"/>
                           </div>

                           <div className="spec-details">
                            <p className="small">Top Pattern</p>
                           <p className="big">Embroidered</p>
                           <hr className="spec-hr"/>
                           </div>

                           <div className="spec-details">
                            <p className="small">Top Design Styling</p>
                           <p className="big">Pleated</p>
                           <hr className="spec-hr"/>
                           </div>

                           <div className="spec-details">
                            <p className="small">Top Hemline</p>
                           <p className="big">Flared</p>
                           <hr className="spec-hr"/>
                           </div>


                        </div>
                    </div>


                    <div className="customer-ratings-container">
                        <h4>RATINGS<span><FaStarHalfStroke/></span></h4>
                        <div className="sub-rat-container">
                            <div className="left-rating-section">
                            <div className="number">4.2 <span> <FaStar/></span></div>
                            <div className="text">10.9k Verified Buyers</div>
                            </div>
                            <hr className="cus-rat-hr"/>
                            <div className="right-rating-section">
                                    <div className="sub-right-container">
                                        <div className="num">5</div>
                                        <div className="star-rating-icon"><AiFillStar className="star-icons"/></div>
                                        <div className="parent">
                                            <div className="child"></div>
                                        </div>
                                        <div className="vote">6693</div>
                                    </div>

                                    <div className="sub-right-container">
                                        <div className="num">4</div>
                                        <div className="star-rating-icon"><AiFillStar className="star-icons"/></div>
                                        <div className="parent">
                                            <div className="child child2"></div>
                                        </div>
                                        <div className="vote">5324</div>
                                    </div>

                                    <div className="sub-right-container">
                                        <div className="num">3</div>
                                        <div className="star-rating-icon"><AiFillStar className="star-icons"/></div>
                                        <div className="parent">
                                            <div className="child child3"></div>
                                        </div>
                                        <div className="vote">4237</div>
                                    </div>

                                    <div className="sub-right-container">
                                        <div className="num">2</div>
                                        <div className="star-rating-icon"><AiFillStar className="star-icons"/></div>
                                        <div className="parent">
                                            <div className="child child4"></div>
                                        </div>
                                        <div className="vote">287</div>
                                    </div>

                                    <div className="sub-right-container">
                                        <div className="num">1</div>
                                        <div className="star-rating-icon"><AiFillStar className="star-icons"/></div>
                                        <div className="parent">
                                            <div className="child child5"></div>
                                        </div>
                                        <div className="vote">156</div>
                                    </div>
                            </div>

                        </div>
                    </div>
                    <hr className="rating-hr"/>

                    <div className="customer-review-container">
                        <h5>Customer review (983)</h5>
                    <div className="review-section">
                        <div className="review-text">
                            <li className="text-li">5 <span><FaStar className="review-star"/></span></li>
                            <li>good product. loved it - fits properly thank you myntra</li>
                        </div>
                        <div className="review-img-container">
                            <img src={img1} alt="" className="review-img"/>
                            <img src={img2} alt="" className="review-img"/>
                        </div>
                        <div className="other-sec">
                           
                        <div className="left-sec">
                        <li className="first-li">Sania Malhotra | </li>
                            <li>23 Sept 2023</li>
                        </div>
                        <div className="right-sec">
                        <li><BiLike/> <span>689</span></li>
                            <li><BiDislike/><span>0</span></li>
                        </div>
                        </div>
                    </div>

                    </div>

                    <div className="review-section">
                        <div className="review-text">
                            <li className="text-li">5 <span><FaStar className="review-star"/></span></li>
                            <li>good product. loved it - fits properly thank you myntra</li>
                        </div>
                        <div className="review-img-container">
                            <img src={img1} alt="" className="review-img"/>
                            <img src={img2} alt="" className="review-img"/>
                            <img src={img3} alt="" className="review-img"/>
                        </div>
                        <div className="other-sec">
                           
                        <div className="left-sec">
                        <li className="first-li">Sania Malhotra | </li>
                            <li>23 Sept 2023</li>
                        </div>
                        <div className="right-sec">
                        <li><BiLike/> <span>689</span></li>
                            <li><BiDislike/><span>0</span></li>
                        </div>
                        </div>
                    </div>

                  

                    <div className="review-section">
                        <div className="review-text">
                            <li className="text-li">5 <span><FaStar className="review-star"/></span></li>
                            <li>good product. loved it - fits properly thank you myntra</li>
                        </div>
                        <div className="review-img-container">
                            <img src={img1} alt="" className="review-img"/>
                            <img src={img2} alt="" className="review-img"/>
                            <img src={img3} alt="" className="review-img"/>
                            <img src={img4} alt="" className="review-img"/>
                        </div>
                        <div className="other-sec">
                           
                        <div className="left-sec">
                        <li className="first-li">Sania Malhotra | </li>
                            <li>23 Sept 2023</li>
                        </div>
                        <div className="right-sec">
                        <li><BiLike/> <span>689</span></li>
                            <li><BiDislike/><span>0</span></li>
                        </div>
                    </div>

                    </div>

                    <div className="review-section">
                        <div className="review-text">
                            <li className="text-li">5 <span><FaStar className="review-star"/></span></li>
                            <li>good product. loved it - fits properly thank you myntra</li>
                        </div>
                        <div className="review-img-container">
                            <img src={img1} alt="" className="review-img"/>
                        </div>
                        <div className="other-sec">
                           
                        <div className="left-sec">
                        <li className="first-li">Sania Malhotra | </li>
                            <li>23 Sept 2023</li>
                        </div>
                        <div className="right-sec">
                        <li><BiLike/> <span>689</span></li>
                            <li><BiDislike/><span>0</span></li>
                        </div>
                    </div>

                    </div>
                 </div>
            </div> 
            <Similar/> 
            <Footer />
        </>
    )
}
export default ProductInfo;