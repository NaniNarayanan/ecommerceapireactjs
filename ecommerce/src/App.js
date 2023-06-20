import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import {BrowserRouter as Router, Switch, Routes, Route} from "react-router-dom"
import Products from "./Component/Products";
import Product from "./Component/Product";

function App() {
  return (
    <>
      
      <Router>
      <Navbar />
        <Routes>
          <Route  path="/" element={<Home />}></Route>
          <Route  path="/products" element={<Products/>}></Route>
          <Route  path="/products/:id" element={<Product/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
