import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
    render(props) {
        let aboutVisibility = 'hide';

        if (this.props.aboutVisibility)
            aboutVisibility = 'show';
        
            let eventOnDesktop = this.props.handleMouseDownNav;

        // removes the event listener onMouseDown that slides the page away
        // when you click anywhere on the background
        // if (this.props.screenSize < 982)
        //     eventOnDesktop = this.props.smallScreen;
        // console.log(window.screen.width);

        return (
            <div id="about-page" 
            className={aboutVisibility}
            onMouseDown={eventOnDesktop}>
                <h1>Under construction 🔧</h1>
                <div className="back-and-search">
                    <div className="close" 
                        onMouseDown={this.props.handleMouseDownNav}>
                    </div>
                </div>             
            </div>
        )
    }
}

export default About;