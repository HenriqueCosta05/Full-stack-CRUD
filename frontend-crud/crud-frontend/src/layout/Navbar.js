import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-dark bg-primary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">CRUD de Produtos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <NavDropdown title="Ações" id="basic-nav-dropdown">
              <NavDropdown.Item href="/novo-produto">Cadastrar produto(s)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
