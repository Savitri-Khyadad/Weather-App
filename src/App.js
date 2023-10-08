import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./containers/Layout/Layout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Contactus from "./components/ContactUs/ContactUs";

const app = () => {
  //   fetch("http://localhost:1337/cities", {
  //   method: "GET",
  //   headers: {
  //      'Content-Type': 'application/json'
  //   },
  // }).then(response => response.json())
  //   .then(data => console.log(data));
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route exact path="/contact" element={<Contactus />} />\
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default app;
