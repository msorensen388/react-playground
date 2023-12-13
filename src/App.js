// Import necessary dependencies
import React, { useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

// Define components for different routes
const Home = () => <div>Home Page</div>;

const InteractivePage = () => {
  // State for interactive elements
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [sliderValue, setSliderValue] = useState(50);

  // Event handlers for interactive elements
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleTextareaChange = (e) => setTextareaValue(e.target.value);
  const handleSliderChange = (e) => setSliderValue(e.target.value);

  return (
    <Container>
      <h2>Interactive Page</h2>
      <Row className="mb-3">
        <Col sm={2}>
          <label>Input:</label>
        </Col>
        <Col>
          <input
            className="w-100"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={2}>
          <label>Textarea:</label>
        </Col>
        <Col>
          <textarea
            className="w-100"
            value={textareaValue}
            onChange={handleTextareaChange}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={2}>
          <label>Slider:</label>
        </Col>
        <Col>
          <input
            className="w-100"
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
          />
          <p>Slider Value: {sliderValue}</p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <label className="me-3">I agree:</label>
          <input type="checkbox" />
        </Col>
        <Col className="text-end">
          <Button>Submit</Button>
        </Col>
      </Row>
    </Container>
  );
};

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/interactive">Interactive Page</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="interactive" element={<InteractivePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
