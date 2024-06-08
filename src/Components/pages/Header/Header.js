import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="menu col-10 offset-1 d-flex rounded-5 p-xl-1 mt-3">
        <Navbar expand="lg" className="menu col-12 rounded-5">
          <Container>
            <Navbar.Brand className="freya p-1" href="#home">
              freya
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink
                  to="/"
                  className={(navDate) =>
                    navDate.isActive ? "text-white nav-link" : "nav-link"
                  }
                  style={{ fontSize: "17px" }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className={(navDate) =>
                    navDate.isActive ? "text-white nav-link" : "nav-link"
                  }
                  style={{ fontSize: "17px" }}
                >
                  Products
                </NavLink>
                <NavLink
                  to="/callus"
                  className={(navDate) =>
                    navDate.isActive ? "text-white nav-link" : "nav-link"
                  }
                  style={{ fontSize: "17px" }}
                >
                  Call us
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
