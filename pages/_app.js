import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css'
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>

    </>
  );
}
