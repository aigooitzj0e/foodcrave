import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Navbar,
    NavItem,
    Nav,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <div>
                        <Nav pullRight>
                            <NavItem eventKey={2} href="/auth/google">
                                Login / Register
                            </NavItem>
                        </Nav>
                    </div>
                );
            default:
                return (
                    <div>
                        <Nav pullRight>
                            <NavItem eventKey={2} href="/api/logout">
                                Logout
                            </NavItem>
                        </Nav>
                        <Navbar.Text pullRight>
                            <Link to="/dashboard">
                                <span className="text-danger">
                                    {this.props.auth.name}
                                </span>
                            </Link>
                        </Navbar.Text>
                    </div>
                );
        }
    }

    render() {
        console.log(this.props);
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            food<span className="text-danger">Crave</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem>
                    </Nav>
                    {this.renderContent()}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
