import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import React from "react";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
      <Subscribe />
      <Footer />
      <BackToTopButton />
    </>
  );
}
