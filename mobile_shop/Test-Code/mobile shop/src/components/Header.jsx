import React from "react";
import "./Header.css";
// import logo from "./images/logo.png";
 





function Header() {


  let handleClick = () => 
    {
         alert("Oh Yeah Codder Daddy!");
        }
        
  let handleClick1 = () => 
        alert("You are so good at coding");


  return (
    <div className="Header">
      {/* <img src={logo} alt="haha" /> */}
      
    <button className="bg-danger m- " onClick={handleClick}>Hit Me Oh Yeah</button>

    <button className="bg-danger" style={{ margin: "10px" }} onClick={handleClick1}>Click Me</button>
          <h1>Hello Coder</h1>
    </div>
  );
}

export default Header;
