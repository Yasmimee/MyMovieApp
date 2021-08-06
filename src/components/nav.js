import reactDom from "react-dom";
import Stars from "./stars";
import { Nav, Navbar, Form, FormControl, ReactStars } from "react-bootstrap";
function Navb({ setSearch, setRating }){
  
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
  
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <input
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
          <Stars setRating={setRating} />
        </Navbar.Collapse>
      </Navbar>
    );
  
}
export default Navb