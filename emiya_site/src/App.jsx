import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Details from "./components/Details.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Details />
      <Footer />
    </>
  );
}

export default App;
