import { useState } from "react";
import { nikeData } from "./data/nikeData";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";

function App() {

   const [data, setData] = useState(nikeData);
   const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Header shoppingItems={cart} />
      <ProductsList products={data} cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
