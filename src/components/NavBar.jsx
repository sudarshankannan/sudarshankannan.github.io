import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul id="headerButtons">
                    <NavItem item="Homepage" tolink="/"></NavItem>
                    <NavItem item="About Me" tolink="/AboutMe"></NavItem>
                    <NavItem item="Contact" tolink="/Contact"></NavItem>
                </ul>
            </nav>  
        )
    }
}
export default NavBar;