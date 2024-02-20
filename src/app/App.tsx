import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { Footer, Header } from "../features";
import { NotFoundPage, ProductPage, ProductsPage } from "../pages";

const headerMenuItems = [
  "Catalog",
  "About us",
  "Product selection",
  "Our team",
  "FAQ",
  "For staff",
];
const footerMenuItems = [
  "Catalog",
  "About us",
  "Product selection",
  "Our team",
  "FAQ",
];

function App() {
  return (
    <>
      <Router>
        <Header
          brand="Goods4you"
          menuItems={headerMenuItems}
        />
        <Routes>
          <Route
            path="/"
            element={<MainPage />}
          />
          <Route
            path="all-products"
            element={<ProductsPage title="All products" />}
          />
          <Route
            path="/:id"
            element={<ProductPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
        <Footer
          brand="Goods4you"
          menuItems={footerMenuItems}
        />
      </Router>
    </>
  );
}

export default App;
