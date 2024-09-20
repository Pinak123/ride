import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function BottomNavbar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="bottom"
      className="justify-content-around"
    >
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            <i className="bi bi-house-door-fill"></i> Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/bikes">
            <i className="bi bi-bicycle"></i> Bikes
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/about">
            <i className="bi bi-info-circle-fill"></i> About
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/contact">
            <i className="bi bi-envelope-fill"></i> Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default BottomNavbar;
