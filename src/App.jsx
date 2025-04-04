import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Offers from "./Pages/Offerings/offers";
import List from "./Pages/Offerings/list";
import Portfolio from "./Pages/Portfolio";
import Testimonial from "./Pages/Testimonial";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Offers />
      <List />
      <Portfolio />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;