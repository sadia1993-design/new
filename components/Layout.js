import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import BackToTopButton from "./BackToTopButton";
import Footer from "./Footer";
import Header from "./Header";
import Subscribe from "./Subscribe";

function Layout({ children }) {
  return (
    <>
      <Header />
      <React.StrictMode>{children}</React.StrictMode>

      <Subscribe />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default Layout;
