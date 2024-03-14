import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";
import { getProductByQuery } from "../fetcher";

const SearchResults = () => {
  const [products, setProducts] = useState({
    errorMessage: "",
    data: [],
  });

  const [searchParams] = useSearchParams();
  let query = searchParams.get("s");
  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductByQuery(query);
      setProducts(responseObject);
    };

    fetchData();
  }, [query]);

  const renderProducts = () => {
    return products?.data.map((p) => (
      <CategoryProduct {...p} key={p.id}>
        {p.title}
      </CategoryProduct>
    ));
  };

  return (
    <div>
      {products.errorMessage && <div>Error: {products.errorMessage}</div>}
      {products.data && renderProducts()}
    </div>
  );
};

export default SearchResults;
