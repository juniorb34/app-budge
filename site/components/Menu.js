import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarText,
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <style>
        {`.menu-custom{
           
            font-size: 20px;
          
          }`}
      </style>

      <Navbar className="menu-custom" color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img
              src="logo.jpg"
              width="80  "
              height="80"
              className=""
              alt="logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto " navbar>
              <NavItem>
                <NavLink href="#servicos">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/orcamento">Orçamento</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Contato</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
