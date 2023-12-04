import React from "react"
import "./Pages.css"
import {AiOutlineRight} from "react-icons/ai"

const Pages = () => {
    return (

        <div className="page-container">
            <div className="left-part">
                <p>Page 1 of 6411</p>
            </div>
            <div className="center-part">
                <div className="pages">
                    <ul className="pages-count">
                        <li className="first-page">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                    </ul>
                    <button className="next">Next <span className="right-icon"><AiOutlineRight/></span></button>
                </div>
            </div>
        </div>
    )
}
export default Pages;