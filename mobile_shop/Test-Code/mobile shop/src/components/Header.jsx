import React from "react";
import "./Header.css";
// import logo from "./images/logo.png";

function Header() {
  let handleClick = () => {
    alert("Oh Yeah Codder Daddy!");
  };

  let handleClick1 = () => alert("You are so good at coding");

  let addData = (a, b) => {
    console.log(a + b);
  };

  return (
    <div className="Header">
      {/* <img src={logo} alt="haha" /> */}

      <button className="bg-danger m- 2" onClick={handleClick}>
        Hit Me Oh Yeah
      </button>
      <button className="bg-secondery m-2 " onClick={() => addData(10 + 5)}>
        Oh Yeah Add
      </button>

      <button className="bg-danger m-2" onClick={handleClick1}>
        Click Me
      </button>
      <h1>Hello Coder</h1>
    </div>
  );
}

export default Header;
