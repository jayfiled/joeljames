import React, { Component } from 'react';
import '../css/Menu.css'

class Menu extends Component {
    render(props) {
        return (
            <button aria-label="back-to-Nav-Page" className="bring-up-navA three-lines-act-as-a-Button-two" onMouseDown={this.props.handleMouseDownAbout} >
                <div className="nav-containerA">
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
