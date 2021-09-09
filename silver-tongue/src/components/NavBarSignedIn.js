import React, { useState } from "react";
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
  Collapse,
} from "reactstrap";

export default function NavBarMain(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    // navbar for when user is signed in
    <Navbar color="dark" dark expand="sm" fixed>
      <NavbarBrand className="ml-3 mr-4" href="profile">
        WERNIX
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        {
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="video" className="mr-2">
                <i className="bi bi-camera-reels icon-nav"></i>VIDEO
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="chat">
                <i className="bi bi-chat-text icon-nav"></i>CHAT
              </NavLink>
            </NavItem>
          </Nav>
        }

        <UncontrolledDropdown>
          <DropdownToggle nav caret style={{ color: "white" }}>
            PROFILE
          </DropdownToggle>
          <DropdownMenu right>
            {/* LOOP THROUGH ALL LANGUAGES WE SUPPORT AND DISPLAY HERE!! */}
            <DropdownItem>
              <i className="bi bi-person-circle icon-nav"></i>Your profile
            </DropdownItem>
            <DropdownItem>
              <i className="bi bi-gear-fill icon-nav"></i>Settings
            </DropdownItem>
            <DropdownItem>
              <i className="bi bi-question-circle-fill icon-nav"></i>Help
            </DropdownItem>
            <DropdownItem>
              <i className="bi bi-box-arrow-right icon-nav"></i>Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Collapse>
    </Navbar>
  );
}
