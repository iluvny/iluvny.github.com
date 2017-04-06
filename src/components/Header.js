import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Face from './Face';

class Header extends React.Component {

    render() {
        return (
            <div className="nak-header">
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Nak</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Blog</NavItem>
                            <NavDropdown eventKey={2} title="Tutorials" id="nak-tutorial-dropdown">
                                <MenuItem eventKey={2.1} href="/react-tutorials/counter">Counter</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="https://github.com/iluvny/iluvny.github.com">GitHub</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="nak-title-wrapper">
                    <a className="nak-title" href="#">{ this.props.title }</a>
                </div>
                {
                    this.props.showFace ? <Face image="images/face.jpg" hoverImage="images/home.svg" /> : ''
                }
            </div>
        );
    }
}

export default Header;