import { NavLink } from "react-router-dom";
import MyAvatar from "../MyAvatar/MyAvatar";

import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  let activeStyle = {
    textDecoration: "active",
  };

  return (
    <Navbar bg="light" expand={false} collapseOnSelect={true}>
      <Container fluid>
        <Navbar.Brand>Моё тестовое задание</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <MyAvatar />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-start">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                to={"/"}
              >
                Галлерея
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                to={"about"}
              >
                Обо мне
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
