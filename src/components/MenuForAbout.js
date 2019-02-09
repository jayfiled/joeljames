import React, { Component } from 'react';
import '../css/Menu.css'

class Menu extends Component {
    render(props) {
        return (
            <button id="lineButtonA" className="bring-up-navA" onMouseDown={this.props.handleMouseDownAbout} >
                <div id="nav-containerA">
                    <div className="toggle-iconA">
                        <span className="barA"></span>
                        <span className="barA"></span>
                        <span className="barA"></span>
                    </div>
                </div>
            </button> 
        );
    }
}

export default Menu;
