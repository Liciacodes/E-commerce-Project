import React from "react";

import { Outlet, Link } from "react-router-dom";

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

      <footer>footer</footer>
    </>
  );
};

export default Layout;
