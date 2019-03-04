import React, { Component } from 'react';
import '../css/Menu.css'

class Menu extends Component {
    render(props) {
        return (
            <button id="three-lines-act-as-a-Button-two" className="bring-up-navA" aria-label="back-to-Nav-Page" onMouseDown={this.props.handleMouseDownContact} >
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
