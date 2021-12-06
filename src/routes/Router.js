import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Gugudan from "../components/Gugudan";
import WordRelay from "../components/WordRelay";
import Home from "./Home";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gugudan" element={<Gugudan />} />
          <Route path="/word-relay" element={<WordRelay />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
