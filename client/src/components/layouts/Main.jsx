import React from "react";
import Home from "../general/Home";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

export default function Main() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
