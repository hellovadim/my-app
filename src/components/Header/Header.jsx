import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
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
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Моё тестовое задание
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-start">
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
