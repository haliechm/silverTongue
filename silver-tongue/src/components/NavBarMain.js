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
    <Navbar color="dark" dark expand="md" fixed>
      <NavbarBrand className="ml-3" href="/">WERNIX</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        </Nav>
        <UncontrolledDropdown>
          <DropdownToggle nav caret style={{color: 'white'}}>
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
