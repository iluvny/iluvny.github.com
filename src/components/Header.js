import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
                            <NavItem eventKey={2} href="#">Sample</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="https://github.com/iluvny/iluvny.github.com">GitHub</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="nak-title-wrapper">
                    <a className="nak-title" href="#">{ this.props.title }</a>
                </div>
                <Face image="images/face.jpg" hoverImage="images/home.svg" />
            </div>
        );
    }
}

export default Header;