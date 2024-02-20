import { Route, Routes } from "react-router-dom";
import { BreadCrumbs } from "./components/BreadCrumbs";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <h2>My Store</h2>
        <BreadCrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
