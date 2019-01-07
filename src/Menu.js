import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
    render() {
        return (
            <div id="nav-container">
                <div class="toggle-icon">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        );
    }
}

export default Menu;
