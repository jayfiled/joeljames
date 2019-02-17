import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component {
    render(props) {
        let visibility = 'hide';
        
        // aboutVisibility is to make the about page display
        // menuVisibility is to make the this page visible
        if (this.props.aboutVisibility || this.props.menuVisibility)
            visibility = 'show';
        
            // Have to add style={{cursor: "pointer"}} to each click event otherwise iOS browsers don't
            // see the elements as clickable.
        return (
            <div id="flyoutMenu" 
                style={{cursor: "pointer"}}
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <div 
                style={{cursor: "pointer"}}
                className="close"
                onMouseDown={this.props.handleMouseDown}
                >
                </div>

                <h1 
                style={{cursor: "pointer"}}
                onMouseDown={this.props.handleMouseDownNav}>
                Portfolio</h1>
                <h1 
                style={{cursor: "pointer"}} 
                onMouseDown={this.props.handleMouseDownAbout}>
                About</h1> 
                {/* the class on #flyoutMenu changes to 'hide'
                which means that this.props.aboutVisibiluty and menuVisibility are falsey
                */}
                <h1 
                style={{cursor: "pointer"}} 
                onMouseDown={this.props.handleMouseDownContact}>
                Contact</h1>
            </div>
        )
    }
}

export default Nav;