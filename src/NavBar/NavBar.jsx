import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './NavBar.css'; // Custom CSS

const NavBar = () => {
    return (
        <div className="container-navbar">
            <Navbar className="navbar" expand="lg" bg="primary" variant="dark"> {/* Fondo primario y texto blanco */}
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="Logo"
                            src="/images/Logo_letras.png"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        JJVE {/* Agregué un texto al lado del logo */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/generarusuarios" className="nav-link">Añadir usuarios</NavLink>
                            <NavLink to="/graficos" className="nav-link">Generar Graficos</NavLink>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;