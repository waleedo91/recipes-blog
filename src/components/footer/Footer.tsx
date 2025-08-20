import { Navbar, Container } from "react-bootstrap";
import logo from "../../images/recipes-logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-bar">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" className="footer-brand">
            <img className='logo' src={logo} alt="Recipes Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
