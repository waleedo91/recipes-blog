import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./TopBar.css";

function TopBar() {
  return (
    <div>
      <Navbar className="topBar" data-bs-theme="light" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#" className="nav-brand">
            Recipes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBar;
