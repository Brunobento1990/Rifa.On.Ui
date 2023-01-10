import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

function Menu() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='col-4'>
        <Navbar color="light" light expand="md-3">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/sobre">Sobre</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/produtos">Produtos</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contato">Contato</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    </div>
  );
}

export default Menu;
