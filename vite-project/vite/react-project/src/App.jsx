import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} >
    //       <Route path="/About" element={<div>about page</div>} />
    //       <Route path="/About" element={<h1>About</h1>} />
    //       <Route path="/contactus" element={<h1>Contact</h1>} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <Home />
  );
}

export default App;
