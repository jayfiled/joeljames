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

                <div className="landing-picture-background">

                    <div className="close" 
                        onMouseDown={this.props.handleMouseDownNav}>
                    </div>

                    <div>
                        <h3>About me</h3>
                    </div>

                    <div>
                        <h1>Focus, enthusiasm, energy, commitment.</h1>
                    </div>
                    {/* css down arrow */}

                </div>

                <div className="white-space-blurb">
                    <p>Joel James is a User Experience and
                    front end developer based in Melbourne. 
                    He plans, creates and grows authentic digital 
                    experiences for companies and individuals 
                    looking to have a positive impact 
                    on their customers lives</p>
                </div>

                <div id="img-grid">
                    <img src={require(`../resources/grid/bits.jpg`)} alt="books-and-gadgets"/>
                    <img src={require(`../resources/grid/campaign.jpg`)} alt=""/>
                    <img src={require(`../resources/grid/live.jpg`)} alt=""/>
                    <img src={require(`../resources/grid/smile.jpg`)} alt=""/>
                    <img src={require(`../resources/grid/think.jpg`)} alt=""/>
                    <img src={require(`../resources/grid/watchnphone.jpg`)} alt=""/>
                    <img src={require(`../resources/grid/workhard.jpg`)} alt=""/>
                </div>


                </div>
        )
    }
}

export default About;