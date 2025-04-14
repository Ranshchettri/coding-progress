// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { HomePage } from './page/HomePage.jsx'
// import LoginPage from './page/LoginPgae.jsx'
// import ReducerHook from './page/reducerhook.jsx'
// import LearnUseEffect from './page/LearnUseEffect.jsx'
// import AppRoutes from './routes.jsx'
// import SingleProductPage from './singleProduct.jsx'


// createRoot(document.getElementById('namuna')).render(
//   <StrictMode>
//     <LearnUseEffect/>
  
    
    
    
//     <BrowserRouter/>
//     <AppRoutes />
//     <SingleProductPage/>
//     {/* <App/> */}
//     {/* <HomePage/> */}
//     {/* <LoginPage/> */}
//     {/* <ReducerHook/> */}
//   </StrictMode>,
// );





import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import AppRoutes from "./routes";

createRoot(document.getElementById("namuna")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);