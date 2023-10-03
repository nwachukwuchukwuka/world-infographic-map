import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import CountryDetail from "./pages/CountryDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:countryCode" element={<CountryDetail />} />
          <Route path="*" element={<p>404, page not found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
