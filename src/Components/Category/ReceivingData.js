import React from 'react'
import "../Category/ReceivingData.css"
import { Link } from 'react-router-dom';

const ReceivingData = (props) => {

   

    return (
         <div className='Subcontainer'>
                <Link to ={props.url}> <div className="backgroundImages" style={{
                         backgroundImage:  `linear-gradient(to bottom, rgba(129, 113, 113, 0), rgba(0, 0, 0, 0.2)), url(${props.backgroundImges})`,
                     }}
                > 
             <div className="details-container">
                 <div className="pro-type">{props.type}</div>
                <div className="discount">{props.discount}</div>
                 <div className="shopNow">{props.now}</div>
             </div>
             </div>
       
         </Link> 
         </div> 
    )
} 

export default ReceivingData;