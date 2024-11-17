// import React, { useState, useEffect } from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import { FaUserCircle } from 'react-icons/fa';
// import "./Navbar.css";

// const Header = () => {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleNavClick = () => {
//     const navbarToggler = document.querySelector('.navbar-toggler');
//     if (navbarToggler && window.innerWidth < 992) {
//       navbarToggler.click();
//     }
//   };

//   return (
//     <>
//       <Navbar expand="lg" className={`navbar ${scrolling ? 'scrolled' : ''}`} style={{ zIndex: "100" }}>
//         <Container>
//           <Navbar.Brand as={NavLink} to="/">
//             <img src="/bulk email service-12.png" alt="Bulk_email" className="navbar-logo" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mx-auto" onClick={handleNavClick}>
//               <Nav.Link as={NavLink} to="/" onClick={handleNavClick}>Home</Nav.Link>
//               <Nav.Link as={NavLink} to="/pricing" onClick={handleNavClick}>Pricing</Nav.Link>
//               <Nav.Link as={NavLink} to="/support" onClick={handleNavClick}>Support</Nav.Link>
//               <Nav.Link as={NavLink} to="/about" onClick={handleNavClick}>About</Nav.Link>
//             </Nav>
//             <Nav className="ms-auto" onClick={handleNavClick} style={{ alignItems: "center" }}>
//               <Nav.Link as={NavLink} to="/signin" onClick={handleNavClick}>Login</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Header;


import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
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

  return (
    <>
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
              {/* <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/contact" onClick={handleNavClick}>Contact</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services" onClick={handleNavClick}>Services</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav className="ms-auto" onClick={handleNavClick} style={{ alignItems: 'center' }}>
              <Nav.Link as={NavLink} to="/signin" onClick={handleNavClick}>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
