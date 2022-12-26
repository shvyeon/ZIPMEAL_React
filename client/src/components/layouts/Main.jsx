import React from "react";
import Home from "../general/Home";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

export default function Main(props) {
  return (
    <>
      <div id="body-wrapper">
        <header>
          <Header />
        </header>
        <main>{props.children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
