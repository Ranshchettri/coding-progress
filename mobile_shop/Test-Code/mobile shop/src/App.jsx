// src/App.jsx
import React, { useState } from "react"; // Add useState here
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { blog } from "./Data/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Header from "./components/header";

function App() {
  let n = 15;
  let hello = () => {
    // n=n+5;                            state managemenet process*****************************
    console.log(n);
  };
  let [count, setCount] = useState(2); // state managemenet process*****************************
  let displayData = () => {
    setCount(count+1); // state managemenet process*****************************
  };

  return (
    <>
      {count}
      <button className="bg-primary m-3" onClick={displayData}>
        Add to Cart
      </button>

      <button className="bg-secondary m-3" onClick={hello}>
        Save
      </button>
      {n}

      <Header />

      {<FontAwesomeIcon icon={faWhatsapp} /> /* react-font-awesome icons */}
      <FontAwesomeIcon icon={faFacebook} />
      <div className="Main">
        {/* <Header headerInfo={headerInfo} Cname="Nmauna Clz">
        <h1>Welcome to Itahri Namuna clz</h1>
        </Header> */}

        <Container fluid></Container>
        <Container>
          <Row>
            {blog.map((v, i) => (
              <ProductItem key={i} data={v} />
            ))}
          </Row>
        </Container>
        {/* <Footer /> */}
      </div>
    </>
  );
}

function ProductItem({ data }) {
  return (
    <div className="col-lg-3 mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Button variant="primary">Enroll Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
