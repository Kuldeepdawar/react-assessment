import Header from "./containers/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" exact element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
