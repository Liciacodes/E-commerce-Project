import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getProducts } from "../fetcher";
import styled from "styled-components";

const ProductDetail = () => {
  const [product, setProduct] = useState({ errorMessage: "", data: {} });
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseObject = await getProductById(productId);
        setProduct(responseObject);
      } catch (error) {
        setProduct({ errorMessage: error.message, data: {} });
      }
    };
    fetchData();
  }, [productId]);

  const createMarkup = () => {
    return { __html: product.data?.description };
  };

  return (
    <article>
      <ProductTitle>{product.data.title}</ProductTitle>

      <figure>
        <div className="category-product-image-container">
          <img src={`/assets/${product.data.image}`} alt={product.data.title} />
        </div>
      </figure>

      <aside>
        <div className="category-product-info-dimensions">
          <h3>Dimensions</h3>
          <label>{product.data.specs?.dimensions}</label>
        </div>

        {product.data.specs?.capacity && (
          <div className="category-product-info-capacity">
            <h3>Capacity</h3>
            <label>{product.data.specs?.capacity}</label>
          </div>
        )}

        <div className="category-product-info-features">
          <h3>Features</h3>
          <ul>
            {product.data.features?.map((f, i) => {
              return <li key={`feature${i}`}>{f}</li>;
            })}
          </ul>
        </div>
      </aside>

      <aside className="category-product-finance">
        <div className="category-product-finance-price">
          &pound;{product.data.price}
        </div>
        <div className="category-product-info-stock">
          <label>Stock Level: {product.data.stock} </label>
          <label>FREE Delivery</label>
        </div>

        <div className="category-product-action">
          <button>Add to Basket</button>
        </div>
      </aside>

      <ProductDescription
        dangerouslySetInnerHTML={createMarkup()}
      ></ProductDescription>
    </article>
  );
};

export default ProductDetail;

const ProductTitle = styled.div`
  grid-column: 1 / span 3;
  color: darkslategray;
  font-weight: bold;
  font-size: 1.5em;
  padding-left: 10px;
  margin-top: 5px;
`;

const ProductDescription = styled.div`
  grid-column: 1 / span 3;
`;
