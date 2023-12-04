
// const Cards = () => {
//     return (
//         <>
//             <div className="heading">UNMISSABLE DEALS!</div>
//         <div className="main-container">

//             <div className="background-img">
//                 <div className="logoContainer">
//                     <img src={jack} alt="" />
//                 </div>
//                 <div className="dash"></div>
//                 <div className="details">Must Have Basic</div>
//                 <div className="price">Starting 999rs</div>
//             </div>

//             <div className="background-img card2">
//                 <div className="logoContainer">
//                     <img src={levis} alt="" />
//                 </div>
//                 <div className="dash"></div>
//                 <div className="details">Premium quality Jeans</div>
//                 <div className="price">Starting with 1999</div>
//             </div>

//             <div className="background-img card3">
//                 <div className="logoContainer">
//                     <img src={allen} alt="" />
//                 </div>
//                 <div className="dash"></div>
//                 <div className="details">Top Shirts</div>
//                 <div className="price">MIN.50% OFF</div>
//             </div>

//             <div className="background-img card4">
//                 <div className="logoContainer">
//                     <img src={high} alt="" />
//                 </div>
//                 <div className="dash"></div>
//                 <div className="details">Jeans with comfort</div>
//                 <div className="price">Offer closes soon</div>
//             </div>

//             <div className="background-img card5">
//                 <div className="logoContainer">
//                     <img src={peter} alt=""  className="peter"/>
//                 </div>
//                 <div className="dash"></div>
//                 <div className="details">Jackets and More</div>
//                 <div className="price">grab best deals</div>
//             </div>

//             <div className="background-img card6">
//                 <div className="logoContainer">
//                     <img src={denim} alt=""className="denim"/>
//                 </div>
//                 <div className="dash"></div>
//                 <div className="details">Fancy Shirts</div>
//                 <div className="price">Check it Out!</div>
//             </div>

//         </div>
//         </>
//     )
// }
// export default Cards;

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