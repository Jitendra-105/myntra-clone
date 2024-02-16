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
import WishList from './Components/wishList/WishList';
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
        <Route path='/wishlist/:id' element = {<WishList/>} />
      </Routes>
    </div>
  )
};

export default App;
