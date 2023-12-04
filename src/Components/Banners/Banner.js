import React from "react"
import "../Banners/Banner.css"

import HomeBanner from '../../assets/banner.jpg'

const Banner = () => {
    return (
            <div className="banner-container">
                <img src={HomeBanner} alt="discount Banner" />
            </div>
    )
}

export default Banner;

