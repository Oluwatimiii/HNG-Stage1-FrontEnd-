import React from "react";
import Section from "./components/Section";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import ScrollToTop from './components/ScrollToTop'
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
