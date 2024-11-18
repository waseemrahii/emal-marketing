import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler && window.innerWidth < 992) {
      navbarToggler.click();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/signin'); // Redirect to the sign-in page after logout
  };

  return (
    <Navbar expand="lg" className={`navbar ${scrolling ? 'scrolled' : ''}`} style={{ zIndex: '100', height: '80px' }}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/bulk email service-12.png" alt="Bulk_email" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" onClick={handleNavClick}>
            <Nav.Link as={NavLink} to="/" onClick={handleNavClick}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/pricing" onClick={handleNavClick}>Pricing</Nav.Link>
            <Nav.Link as={NavLink} to="/support" onClick={handleNavClick}>Support</Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleNavClick}>About</Nav.Link>
          </Nav>
          <Nav className="ms-auto" onClick={handleNavClick} style={{ alignItems: 'center' }}>
            {isAuthenticated ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/signin" onClick={handleNavClick}>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
