import { useEffect, useState } from "react";
import "./App.css";
import Category from "./components/Category";
import { getCategories, getProducts } from "./fetcher";

function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });
  const [products, setProducts] = useState({ errorMessage: "", data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();

      setCategories(responseObject);
    };
    fetchData();
  }, []);

  const handleCategoryClick = (id) => {
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    };
    fetchData();
  };

  const renderCategories = () => {
    return categories.data.map((c) => (
      <Category
        key={c.id}
        id={c.id}
        title={c.title}
        onCategoryClick={() => handleCategoryClick(c.id)}
      />
    ));
  };

  const renderProducts = () => {
    return products.data.map((p) => <div>{p.title}</div>);
  };

  return (
    <>
      <header>My Store</header>
      <section>
        <nav>
          {categories.errorMessage && (
            <div> Error:{categories.errorMessage}</div>
          )}
          {categories.data && renderCategories()}
        </nav>
        <article>
          <h1>Products</h1>
          {products && renderProducts()}
          {products.errorMessage && <div>{products.errorMessage}</div>}
        </article>
      </section>

      <footer>footer</footer>
    </>
  );
}

export default App;
