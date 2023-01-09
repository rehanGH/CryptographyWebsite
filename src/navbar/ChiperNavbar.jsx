import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const CipherNavbar = () => {
  const [selectedCipher, setSelectedCipher] = useState('AES');

  const handleCipherSelect = (cipher) => {
    setSelectedCipher(cipher);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Encryption/Decryption App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title={selectedCipher} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => handleCipherSelect('AES')}>AES</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCipherSelect('XOR')}>XOR</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCipherSelect('Caesar Cipher')}>Caesar Cipher</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CipherNavbar;
