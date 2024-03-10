import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const ProductTitle = styled.div`
  grid-column: 1 / span 3;
  color: darkslategray;
  font-weight: bold;
  font-size: 1.5em;
  padding-left: 10px;
  margin-top: 5px;
`;

const ProductImageContainer = styled.div`
  padding: 10px;
  width: 60%;
`;

const ProductImageContainerImage = styled.img`
  width: 100%;
  height: 100%;
`;
const CategoryProduct = ({
  id,
  title,
  image,
  specs,
  features,
  price,
  stock,
}) => {
  const navigate = useNavigate();
  return (
    <article>
      <ProductTitle>
        <Link to={`products/${id}`}>{title}</Link>
      </ProductTitle>

      <figure>
        <ProductImageContainer>
          <ProductImageContainerImage src={`/assets/${image}`} alt="title" />
        </ProductImageContainer>
      </figure>

      <aside>
        <div className="category-product-info-dimensions">
          <h3>Dimensions</h3>
          <label>{specs.dimensions}</label>
        </div>

        {specs.capacity && (
          <div className="category-product-info-capacity">
            <h3>Capacity</h3>
            <label>{specs.capacity}</label>
          </div>
        )}

        <div className="category-product-info-features">
          <h3>Features</h3>
          <ul>
            {features?.map((f, i) => {
              return <li key={`feature${i}`}>{f}</li>;
            })}
          </ul>
        </div>
      </aside>

      <aside className="category-product-finance">
        <div className="category-product-finance-price">&pound;{price}</div>
        <div className="category-product-info-stock">
          <label>Stock Level: {stock} </label>
          <label>FREE Delivery</label>
        </div>

        <div className="category-product-action">
          <button onClick={() => navigate(`products/${id}`)}>
            View Product
          </button>
          <button>Add to Basket</button>
        </div>
      </aside>
    </article>
  );
};

export default CategoryProduct;
