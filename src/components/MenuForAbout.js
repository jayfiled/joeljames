import React, { Component } from 'react';
import '../css/Menu.css'

class Menu extends Component {
    render(props) {
        return (
            <button id="three-lines-act-as-a-Button-two" aria-label="back-to-Nav-Page" className="bring-up-navA" onMouseDown={this.props.handleMouseDownAbout} >
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
