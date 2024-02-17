import './App.css';
import {Route, Routes} from "react-router-dom";

import Home from './Components/Home/Home'
import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import Kids from './Components/Kids/Kids';
import HomeLiving from './Components/Home&Living/HomeLiving';
import Beauty from './Components/Beauty/Beauty'
import Signup from './Components/Signup/Signup';
import Products from "./Components/Products/Products"
import ProductInfo from './Components/ProductInfo/ProductInfo';
import AllWishList from "./Components/wishList/AllWishList"
import Cart from './Components/addToCart/Cart';
import cartImg from "./assets/ethnic/img10.jpg"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/Men' element= {<Men/>} />
        <Route path='/Women' element= {<Women/>} />
        <Route path='/Kids' element= {<Kids/>} />
        <Route path='/HomeLiving' element= {<HomeLiving/>} />
        <Route path='/Beauty' element= {<Beauty/>} />
        <Route path='/Signup' element= {<Signup/>} />
        <Route path='/Products' element = {<Products/>} />
        <Route path='/ProductInfo/:id' element = {<ProductInfo/>} />
        <Route path='/allwishlist' element = {<AllWishList/>} />
        <Route path='/cart' element = {<Cart/>} />
      </Routes>
    </div>
  )
};

export default App;
