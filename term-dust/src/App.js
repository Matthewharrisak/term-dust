import React from 'react';
import NavBar from "./Navbar/NavBar";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    
    <div className="App">
    <Container>
      <Row >
        <Col>
        <NavBar/>
          {" "}
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
