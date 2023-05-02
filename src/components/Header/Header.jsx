import React, { useContext } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <Image
              style={{ height: "45px", marginRight: "250px" }}
              src="https://t4.ftcdn.net/jpg/02/20/53/37/360_F_220533755_AYMWUZ1SHbmsBTSjWcsAT0sG9rD1eVMf.jpg"
              roundedCircle
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Blogs</Nav.Link>
              <Nav.Link href="#pricing">Chiefs</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
            </Nav>
            <Nav className="">
              {
                user ? <> <FaUserCircle /> </> 
                :
                <> 
                  <Link to={"/login"}>
                {" "}
                <Button variant="warning">Log in</Button>
              </Link> </>
               

            
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
