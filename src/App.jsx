import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Home from "./components/Home";
import Search from "./components/Search";
import Support from "./components/Support";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <Home />
      <Search />
      <Support />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
