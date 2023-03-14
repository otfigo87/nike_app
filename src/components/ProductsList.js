
import ProductListItem from './ProductListItem';

const ProductsList = ({ products, cart, setCart }) => {
  return products.map((product) => (
    <ProductListItem
      product={product}
      cart={cart}
      setCart={setCart}
      key={product.id}
    />
  ));
};

export default ProductsList