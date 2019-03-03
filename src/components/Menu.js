import React, { Component } from 'react';
import '../css/Menu.css'

class Menu extends Component {
    render(props) {
        return (
            <button type="button" aria-label="Open-Nav-Page" tabIndex="0" id="three-lines-act-as-a-Button" className="bring-up-nav" 
            onKeyDown={this.props.handleEnter}   
            onMouseDown={this.props.handleMouseDown} >
                <div id="nav-container">
                    <div className="toggle-icon">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </button> 
        );
    }
}

export default Menu;
