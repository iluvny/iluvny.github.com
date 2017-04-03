import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Face from './Face';

class Header extends React.Component {
    render() {
        return (
            <div className="nak-header">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Nak</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem href="#test">Blog</NavItem>
                            <NavItem href="#2">Sample</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem href="#3">GitHub</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="nak-title-wrapper">
                    <a className="nak-title" href="#">{ this.props.title }</a>
                </div>
                <Face/>
            </div>
        );
    }
}

export default Header;