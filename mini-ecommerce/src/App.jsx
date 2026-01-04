import { useProducts } from "./hooks/useProducts";
import { useCart } from "./hooks/useCart";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const productState = useProducts();
  const cartState = useCart();

  const categories = [
    ...new Set(productState.allProducts.map(p => p.category))
  ];

  return (
    <div className="app">
      <h1>Mini E-Commerce</h1>

      <Filters
        search={productState.search}
        setSearch={productState.setSearch}
        category={productState.category}
        setCategory={productState.setCategory}
        sort={productState.sort}
        setSort={productState.setSort}
        categories={categories}
      />

      <ProductList
        products={productState.products}
        addToCart={cartState.addToCart}
      />

      <Cart {...cartState} />
    </div>
  );
}

