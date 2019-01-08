import React, { Component } from 'react';
import '../css/Menu.css'

class Menu extends Component {
    render() {
        return (
            <div id="nav-container">
                <div className="toggle-icon">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        );
    }
}

export default Menu;
