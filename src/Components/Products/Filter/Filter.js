import React, { useState } from "react"
import "./Filter.css"
import { CiSearch } from "react-icons/ci"
import { BiFilterAlt } from "react-icons/bi"

const Filter = () => {
    const [clickFilter, setClickFilter] = useState(false)
    const handleFilter = () => setClickFilter(!clickFilter)
    return (
        <div className="main-filter-section">

            <div className="filter-icon-container">
                <BiFilterAlt className="filter-icons" onClick={handleFilter} />
            </div>

            <div className={clickFilter ? "filter-section showFilter" : "filter-section"}>

                <div className="sub-filter-section">
                    <div className="top-head">
                        <span className="filter-span">CATEGORIES</span>
                        <CiSearch className="filter-icon" />
                    </div>
                    <div className="body">
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Sarees <span>(5460)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Kurtas <span>(7426)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Kurta Set <span>(6460)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Jewellery Set <span>(6231)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Earrings <span>(14060)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Ethnic Dresses<span>(9876)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Dress Material<span>(2830)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Lehenga Choli <span>(7260)</span>
                        </label>
                    </div>
                </div>

                <div className="sub-filter-section">
                    <div className="top-head">
                        <span className="filter-span">BRANDS</span>
                        <CiSearch className="filter-icon" />
                    </div>
                    <div className="body">
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> KALINI <span>(5460)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Mitera <span>(7426)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Anouk <span>(6460)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Sangria <span>(6231)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Saree mall <span>(14060)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> HERE&NOW<span>(9876)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Dress Material<span>(2830)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> Lehenga Choli <span>(7260)</span>
                        </label>
                    </div>
                </div>

                <div className="sub-filter-section">
                    <div className="top-head">
                        <span className="filter-span">PRICE</span>
                        <CiSearch className="filter-icon" />
                    </div>
                    <div className="body">
                        <label htmlFor="" className="pricing"><input type="checkbox" name="Kurta" className="price-width" /> RS. 1000 TO RS. 2500 <span>(6460)</span>
                        </label>
                        <label htmlFor="" className="pricing"><input type="checkbox" name="Kurta" className="price-width" /> RS. 2500 TO RS. 5000 <span>(6231)</span>
                        </label>
                        <label htmlFor="" className="pricing"><input type="checkbox" name="Kurta" className="price-width" /> RS. 5000 TO RS. 10000 <span>(14060)</span>
                        </label>
                        <label htmlFor="" className="pricing"><input type="checkbox" name="Kurta" className="price-width" /> RS. 10000 TO RS. 20000<span>(9876)</span>
                        </label>
                    </div>


                </div>

                <div className="sub-filter-section">
                    <div className="top-head">
                        <span className="filter-span">COLORS</span>
                        <CiSearch className="filter-icon" />
                    </div>
                    <div className="body">
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> <span className="colors gold"></span> Gold <span>(6460)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> <span className="colors red"></span>Red<span>(6231)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> <span className="colors green"></span>Green<span>(14060)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> <span className="colors pink"></span>Pink<span>(9876)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> <span className="colors yellow"></span>Yellow<span>(9876)</span>
                        </label>
                        <label htmlFor=""><input type="checkbox" name="Kurta" id="" /> <span className="colors blue"></span>Blue<span>(9876)</span>
                        </label>
                    </div>


                </div>

                <div className="sub-filter-section">
                    <div className="top-head">
                        <span className="filter-span">DISCOUNT</span>
                        <CiSearch className="filter-icon" />
                    </div>
                    <div className="body">
                        <label htmlFor=""><input type="radio" name="discount" id="" />10% and above</label>
                        <label htmlFor=""><input type="radio" name="discount" id="" />20% and above</label>
                        <label htmlFor=""><input type="radio" name="discount" id="" />30% and above</label>
                        <label htmlFor=""><input type="radio" name="discount" id="" />40% and above</label>
                        <label htmlFor=""><input type="radio" name="discount" id="" />50% and above</label>
                        <label htmlFor=""><input type="radio" name="discount" id="" />60% and above</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filter;