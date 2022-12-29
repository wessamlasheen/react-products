import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
// import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Products />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
