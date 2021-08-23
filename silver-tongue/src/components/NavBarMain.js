import React, {useState} from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  NavbarText,
  DropdownMenu,
  Collapse
} from "reactstrap";

export default function NavBarMain(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" fixed>
      <NavbarBrand href="/">wernix</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {/* <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem> */}
        </Nav>
        {/* <NavbarText>Simple Text</NavbarText> */}
        <UncontrolledDropdown>
          <DropdownToggle nav caret>
            Site Language: English
          </DropdownToggle>
          <DropdownMenu right>
            {/* LOOP THROUGH ALL LANGUAGES WE SUPPORT AND DISPLAY HERE!! */}
            <DropdownItem>English</DropdownItem>
            <DropdownItem>Spanish</DropdownItem>
            <DropdownItem>Italian</DropdownItem>
            <DropdownItem>Russian</DropdownItem>
            {/* <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem> */}
          </DropdownMenu>
        </UncontrolledDropdown>
      </Collapse>
    </Navbar>
  );
}
