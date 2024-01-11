import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import React, { useState } from "react";
let imgitem = "450 X 180";

function App() {
  let data = [
    {
      item: "Fancy Product",
      rating: "",
      price: "",
      price1: "$40.00-$80.00",
      sale: "",
    },
    {
      item: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$20.00 ",
      price1: "$18.00",
      sale: "sale",
    },
    {
      item: "Sale Item",
      rating: "",
      price: "$50.00 ",
      price1: "$25.00",
      sale: "sale",
    },
    {
      item: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "",
      price1: "$40.00",
      sale: "",
    },
    {
      item: "Sale Item",
      rating: "",
      price: "$50.00 ",
      price1: "$25.00",
      sale: "sale",
    },
    {
      item: "Fancy Product",
      rating: "",
      price: "",
      price1: "$120.00-$280.00",
      sale: "",
    },
    {
      item: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$20.00 ",
      price1: "$18.00",
      sale: "sale",
    },
    {
      item: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "",
      price1: "$40.00",
      sale: "",
    },
  ];
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Start-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  All Product
                  <NavDropdown.Divider />
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Popular Items
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  New Arrival
                </NavDropdown.Item>
              </NavDropdown>
              <Button variant="success" className="cart-btn">
                <i class="fa-solid fa-cart-shopping"></i> Cart {count}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="con-head">
        <h1 className="head-text">Shop in Style</h1>
        <p>With this shop Homepage Template</p>
      </header>
      <div className="card-container">
        {data.map((val, index) => (
          <Cards prod={val} key={index} count={count} setCount={setCount} />
        ))}
      </div>
      <footer>Copyright © Your Website 2024</footer>
    </div>
  );
}

function Cards({ prod, count, setCount }) {
  let [option, setOption] = useState(false);
  function counter() {
    setCount(count + 1);
    setOption(true);
  }
  function removecounter() {
    setCount(count - 1);
    setOption(false);
  }
  return (
    <div className="cards">
      <Card
        className="card-details"
        border="dark"
        style={{ width: "15rem", height: "350px" }}
      >
        <Badge bg="dark" className="sale">
          {prod.sale}
        </Badge>
        <Card.Header style={{ height: "120px", padding: "80px" }}>
          {imgitem}
        </Card.Header>
        <Card.Body className="card-body">
          <Card.Title>{prod.item}</Card.Title>
          <Card.Text>{prod.rating}</Card.Text>
          <Card.Text>
            <span>
              <strike>{prod.price}</strike>
            </span>
            {prod.price1}
          </Card.Text>
          {!option ? (
            <Button className="btn-add" variant="primary" onClick={counter}>
              Add to Cart
            </Button>
          ) : (
            <Button
              className="btn-remove"
              variant="danger"
              onClick={removecounter}
            >
              Remove from Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default App;
