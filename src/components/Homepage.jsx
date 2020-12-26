import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Homepage extends Component{
    render(){
        return (
            <header>
                <ul id="headerButtons">
                    <li className="navButton"><Link to="">Home</Link></li>
                </ul>
        </header>
        );
    }
}

export default Homepage;