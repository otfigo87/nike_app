import { useContext } from "react";
import { ProductContext } from "../App";
import ProductListItem from "./ProductListItem";

const ProductsList = ({ cart, setCart }) => {

  const productContextValue = useContext(ProductContext)

  return productContextValue.data.map((product) => (
    <ProductListItem
      product={product}
      cart={cart}
      setCart={setCart}
      key={product.id}
    />
  ));
};

export default ProductsList;
