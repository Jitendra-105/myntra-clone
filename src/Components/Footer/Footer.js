import React from "react"
import "../Footer/Footer.css"
import { Link } from "react-router-dom"
import googlePlay from "../../assets/FooterImg/googleplay.png"
import appstore from "../../assets/FooterImg/appstore.jpg"

import { FaFacebookSquare } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6"
import { GrYoutube } from "react-icons/gr"
import { FaTwitter } from "react-icons/fa"

import { VscWorkspaceTrusted } from "react-icons/vsc"
import { MdOutlinePolicy } from "react-icons/md"

const Footer = () => {


    return (
        <>

            <div className="footer-container">

                <div className="first-col font">
                    <h4>ONLINE SHOPPING</h4>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Men">Men</Link>
                        </li>
                        <li>
                            <Link to="/Women">Women</Link>
                        </li>
                        <li>
                            <Link to="/Studio">Studio</Link>
                        </li>
                        <li>
                            <Link to="/Beauty">Beauty</Link>
                        </li>
                        <li>
                            <Link to="/Kids">Kids</Link>
                        </li>
                        <li>
                            <Link to="/HomeLiving">Home&Living</Link>
                        </li>
                    </ul>
                </div>

                <div className="second-col font">
                    <h4>CUSTOMER POLICIES</h4>
                    <ul>
                        <li>
                            <Link to="/ContactUs">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/TC">T&C</Link>
                        </li>
                        <li>
                            <Link to="/FAQ">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/Terms">Terms of Use</Link>
                        </li>
                        <li>
                            <Link to="/Track">Track Orders</Link>
                        </li>
                        <li>
                            <Link to="/Shipping">Shipping</Link>
                        </li>
                        <li>
                            <Link to="/Cancellation">Cancellation</Link>
                        </li>
                    </ul>
                </div>

                <div className="third-col font">
                    <div className="firstChild">
                        <h4>EXPERIENCE MYNTRA APP ON MOBILE APP</h4>
                        <img src={googlePlay} alt="" className="imgSize"/>
                        <img src={appstore} alt="" className="imgSize"/>
                    </div>

                    <div className="secondChild">
                        <h6>KEEP IN TOUCH</h6>
                        <FaFacebookSquare  className="f-icon"/>
                        <FaSquareInstagram className="f-icon"/>
                        <GrYoutube className="f-icon"/>
                        <FaTwitter className="f-icon"/>
                    </div>
                </div>

                <div className="forth-col font">
                    <div ><VscWorkspaceTrusted className="firstIcon"/> <span> <strong>100% ORIGINAL</strong> gurantee for all products at Myntra.com</span></div>
                    <div><MdOutlinePolicy  className="secondIcon"/> <span> <strong>Return within 14days</strong> gurantee for all of receiving orders</span></div>
                </div>

            </div>
        </>
    )
}
export default Footer;