import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component {
    render(props) {
        let visibility = 'hide';
        
        if (this.props.aboutVisibility)
            visibility = 'show';
        
        return (
            <div id="flyoutMenu" 
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <div className="close"
                onMouseDown={this.props.handleMouseDown}
                >
                </div>

                <h1 
                onMouseDown={this.props.handleMouseDownNav}>
                Portfolio</h1>
                <h1 
                onMouseDown={this.props.handleMouseDownAbout}>About</h1>
                <h1>Contact</h1>
            </div>
        )
    }
}

export default Nav;