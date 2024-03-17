import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";
import { getProductByQuery } from "../fetcher.js";

const SearchResults = () => {
  const [products, setProducts] = useState({
    errorMessage: "",
    data: [],
  });

  const [searchParams] = useSearchParams();
  const query = searchParams.get("s");

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductByQuery(query);
      setProducts(responseObject);
    };
    if (query) {
      fetchData();
    }
  }, [query]);

  const renderProducts = () => {
    if (products.data.length > 0) {
      return products.data.map((p) => (
        <CategoryProduct {...p} key={p.id}>
          {p.title}
        </CategoryProduct>
      ));
    } else {
      return <div>No Results Found</div>;
    }
  };

  return (
    <div>
      <h3>Search Results Page</h3>
      {products.errorMessage && <div>Error: {products.errorMessage}</div>}
      {renderProducts()}
    </div>
  );
};

export default SearchResults;
