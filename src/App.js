import { useState, createContext } from "react";
import { nikeData } from "./data/nikeData";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";

// Create the context
export const ProductContext = createContext(null);


function App() {
  
   const [data, setData] = useState(nikeData);
   const [cart, setCart] = useState([])

  return (
    // wrap components inside Context Provider and pass value
    <ProductContext.Provider value={{data, cart, setCart}}> 
      <div className="App">
        <Header  />
        <ProductsList />
        <Footer />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
