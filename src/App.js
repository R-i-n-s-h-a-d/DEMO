import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom" 
import Cloth from "./pages/Cloth"
import Cart from "./pages/Cart"
import Earphone from "./pages/Earphone"
import Facewash from "./pages/Facewash"
import Mobile from "./pages/Mobile"
import Perfume from "./pages/Perfume"
import Shoe from "./pages/Shoe"
import Wallet from "./pages/Wallet"
import Pants from "./pages/Pants" 

function App() {
  return (
    <>
      <Navbar />
      <div> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/earphone" element={<Earphone/>} />
          <Route path="/facewash" element={<Facewash />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/shoe" element={<Shoe />} />
          <Route path="/wallet" element={<Wallet />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
