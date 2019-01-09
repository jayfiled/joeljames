import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component {
    render(props) {
        let visibility = 'hide';
        
        if (this.props.menuVisibility)
            visibility = 'show';
        
        return (
            <div id="flyoutMenu" 
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <h1>Portfolio</h1>
                <h1>About</h1>
                <h1>Contact</h1>
            </div>
        )
    }
}

export default Nav;