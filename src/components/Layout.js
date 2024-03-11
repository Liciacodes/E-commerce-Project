import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const Layout = ({ categories }) => {
  const renderCategories = () => {
    return categories.data.map((c) => (
      <li key={c.id}>
        <Link to={`/categories/${c.id}`}>{c.title}</Link>
      </li>
    ));
  };
  return (
    <>
      <header>My Store</header>
      <section>
        <nav>
          {categories.errorMessage && (
            <div> Error:{categories.errorMessage}</div>
          )}

          <ul>{categories.data && renderCategories()}</ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </section>

      <footer>
        <FooterLinks to="/">Home</FooterLinks>{" "}
        <FooterLinks to="/basket">Basket</FooterLinks>
      </footer>
    </>
  );
};

export default Layout;

const FooterLinks = styled(Link)`
  color: blue;
  text-decoration: underline;
`;
