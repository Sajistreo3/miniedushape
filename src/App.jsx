import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home"; // New consolidated Home page
import WebDevelopment from "./Pages/WebDevelopment";
import MobileAppDevelopment from "./Pages/MobileAppDevelopment";
import DataScience from "./Pages/DataScience";
import Cybersecurity from "./Pages/Cybersecurity";

function App() {
  return (
    <Router>
      <div className="">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/services/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route path="/services/data-science" element={<DataScience />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
