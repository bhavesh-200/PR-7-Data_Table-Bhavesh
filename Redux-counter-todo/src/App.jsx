import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Componets/login";
import Signup from "./Componets/signup";
import Counter from "./Componets/counter";
import Todo from "./Componets/todo";
import { Container, Nav, Navbar } from "react-bootstrap";
import Home from "./Componets/Home";

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>React App</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
            <Nav.Link as={Link} to="/todo">Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
         <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

