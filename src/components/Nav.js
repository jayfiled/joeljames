import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component {
    render(props) {
        let visibility = 'hide';
        
        if (this.props.menuVisibility)
            visibility = 'show';

        let portVisibility = 'hide';

        if (this.props.portVisibility)
            portVisibility = 'show';
        
        return (
            <div id="flyoutMenu" 
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>

                <h1 
                onMouseDown={this.props.handleMouseDownNav}
                className={portVisibility}>
                Portfolio</h1>
                <h1>About</h1>
                <h1>Contact</h1>
            </div>
        )
    }
}

export default Nav;