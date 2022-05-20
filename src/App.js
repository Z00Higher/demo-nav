import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import About from './Components/About.js'
import './App.css';
import Contact from './Components/Contact.js';
import Home from './Components/Home.js';



  function App() {
    return (
        
      <div className="App">
          <BrowserRouter>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      <div>
          <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/home" element={<Home/>}/>
              
          </Routes>

            </div>
            </BrowserRouter>
      </div>
    
    );
  }


export default App;
