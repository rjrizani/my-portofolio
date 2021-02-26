/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import MediaMenu from "components/Menus/MediaMenu";
import NavitemWithToolTip from "./NavitemWithToolTip";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <span className="display-4">Rizani</span>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">My Work</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <MediaMenu
                          title='Frontend'
                          description='Look at my front-end project here'
                          color='primary'
                          icon='spaceship'
                          link='https://github.com/rjrizani'
                        />
                        <MediaMenu
                          title='Backend'
                          description='Look at my back-end project here'
                          color='primary'
                          icon='ui-04'
                          link='https://github.com/rjrizani/my-nodejs-express-moggodb'
                        />
                        <MediaMenu
                          title='Design'
                          description='Look at my design project here'
                          color='warning'
                          icon='palette'
                          link='https://web.facebook.com/rahasiaPintar?_rdc=1&_rdr'
                        />
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink href='/profile'>
                    Profile
                  </NavLink>
              </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavitemWithToolTip
                  link='https://www.linkedin.com/in/ahmad-rizani-199a8110a/'
                  icon='linkedin-square'
                  title='Linkedln'
                  description='Linkedln profil'
                />
                <NavitemWithToolTip
                  link='https://github.com/rjrizani'
                  icon='github'
                  title='Github'
                  description='Github'
                />
                <NavitemWithToolTip
                  link='https://www.facebook.com/rjrizani'
                  icon='facebook-square'
                  title='Facebook'
                  description='Like us on Facebook'
                />
                <NavitemWithToolTip
                  link='https://www.instagram.com//_rizani_'
                  icon='instagram'
                  title='Instagram'
                  description='Like us on Instagram'
                />
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
