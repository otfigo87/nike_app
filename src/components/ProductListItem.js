import { useContext } from "react";
import { ProductContext } from "../App"



const ProductListItem = ({ product}) => {
  //use the Context
  const productContextValue = useContext(ProductContext);
  const { cart, setCart } = productContextValue;

  const handleAddToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <>
      <div>
        <h6>{product.name}</h6>
        <img src={product.image} alt={product.name} width="200" />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </>
  );
};

export default ProductListItem