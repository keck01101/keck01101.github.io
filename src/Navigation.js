import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
    return (
        <Navbar expand= "sm" data-bs-theme="dark" bg="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" defaultActiveKey="1">
                        <Nav.Item className="mx-2">
                            <LinkContainer to="/">
                                <Nav.Link eventKey="1">Home</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <NavDropdown title="Projects" id="nav-dropdown">
                            <LinkContainer to="/digital">
                                <NavDropdown.Item eventKey="2.1">Digital</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/embedded">
                                <NavDropdown.Item eventKey="2.2">Embedded</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/other">
                                <NavDropdown.Item eventKey="2.3">Other</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation