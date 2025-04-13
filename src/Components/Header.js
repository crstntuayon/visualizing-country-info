import React, { useState } from "react";
import { Container, Navbar, Dropdown, DropdownButton } from 'react-bootstrap'; // ✅ Recommended
import logo from "../Assets/logo.png"; // ✅ Recommended
import "./Header.css"; // ✅ Recommended
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

function Header({ onSearch, onFilter, className }) {
  const [query, setQuery] = useState("");
  const [showRegionModal, setShowRegionModal] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleFilter = (filterType) => {
    onFilter(filterType);
    setShowRegionModal(false);
  };

  return (
    <Navbar className={`header-fixed text-white py-2 ${className}`}>
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home">
          <h4>
          <img src={logo} alt="" className='logo'/>
            <strong className="text-light"></strong>
          </h4>
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <form className="d-flex me-2" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search countries"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn custom-btn" type="submit">
            <i class="fa fa-search" ></i>
            </button>
          </form>
          <DropdownButton
            id="dropdown-basic-button"
            title="Filter"
            variant="secondary"
          >
            <Dropdown.Item onClick={() => handleFilter("all")}>
              All Countries
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter("population")}>
              Population Size
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setShowRegionModal(true)}>
              Region
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </Container>

        <Modal show={showRegionModal} onHide={() => setShowRegionModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select Region</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="g-3">
            <Col md={4} xs={6}>
              <Button variant="primary" onClick={() => handleFilter("Asia")} className="w-100">Asia</Button>
            </Col>
            <Col md={4} xs={6}>
              <Button variant="primary" onClick={() => handleFilter("Africa")} className="w-100">Africa</Button>
            </Col>
            <Col md={4} xs={6}>
              <Button variant="primary" onClick={() => handleFilter("Europe")} className="w-100">Europe</Button>
            </Col>
            <Col md={4} xs={6}>
              <Button variant="primary" onClick={() => handleFilter("North America")} className="w-100">North America</Button>
            </Col>
            <Col md={4} xs={6}>
              <Button variant="primary" onClick={() => handleFilter("South America")} className="w-100">South America</Button>
            </Col>
            <Col md={4} xs={6}>
              <Button variant="primary" onClick={() => handleFilter("Oceania")} className="w-100">Oceania</Button>
            </Col>
            <Col md={4} xs={6}>
              <Button variant="primary" onClick={() => handleFilter("Antarctica")} className="w-100">Antarctica</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default Header;