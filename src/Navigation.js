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
                        <Nav.Item>
                            <LinkContainer to="/">
                                <Nav.Link eventKey="1">Home</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <NavDropdown title="Projects" id="nav-dropdown">
                            <LinkContainer to="/software">
                                <NavDropdown.Item eventKey="2.1">Software</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/hardware">
                                <NavDropdown.Item eventKey="2.2">Hardware</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/embedded">
                                <NavDropdown.Item eventKey="2.3">Embedded</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/ee">
                                <NavDropdown.Item eventKey="2.4">Electrical</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation