import React, { useContext } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  NavLink,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import login from '../../assets/login.png'

import { AuthContext } from "../Providers/AuthProvider";
import { FaBeer, FaUserAlt, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // console.log(user.photoURL);
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
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none text-black" to={"/"}>
                  {" "}
                  Home
                </Link>
              </Nav.Link>

              

             

              <Nav.Link>
                {" "}
                <Link className="text-decoration-none text-black" to={"/blogs"}>
                  {" "}
                  Blogs
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing">Chiefs</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
            </Nav>
            <Nav className="">
              {user ? (
                <>
                  {" "}
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        {user?.displayName ? user?.displayName: 'User name Not available' }
                      </Tooltip>
                    }
                  >
                    {({ ref, ...triggerHandler }) => (
                      <Image
                        {...triggerHandler}
                        style={{ height: "40px" }}
                        src={user?.photoURL ?  user?.photoURL  : {login}  }
                        roundedCircle
                        ref={ref}
                      />
                    )}
                  </OverlayTrigger>{" "}
                  <Button onClick={handleLogout} size="sm" variant="warning">
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    {" "}
                    <Button size="sm" variant="warning">
                      Log in
                    </Button>
                  </Link>{" "}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
