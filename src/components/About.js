import React, { Component } from 'react';
import '../css/About.css';
import MenuForAbout from './MenuForAbout';
import '../css/MenuForAbout.css';

class About extends Component {
    render(props) {
        let aboutVisibility = 'hide';

        if (this.props.aboutVisibility)
            aboutVisibility = 'show';
        
            // let eventOnDesktop = this.props.handleMouseDownAbout;

        // removes the event listener onMouseDown that slides the page away
        // when you click anywhere on the background
        // if (this.props.screenSize < 982)
        //     eventOnDesktop = this.props.smallScreen;
        console.log(this.props.handleMouseDownContact);

        return (
            <div id="about-page" 
            className={aboutVisibility}
            // onMouseDown={eventOnDesktop}        
            >

                <div className="landing-picture-background">

                    <div className="close" 
                        onMouseDown={this.props.handleMouseDownNav}>
                    </div>
                    
                    <div>
                        <h3>About me</h3>
                        <MenuForAbout 
                        handleMouseDownContact={this.props.handleMouseDownContact} 
                        />

                    </div>

                    <div>
                        <h1>Focus, enthusiasm, energy, commitment.</h1>
                    </div>
                    <img src={require(`../resources/icons/arrow-down.png`)} alt="arrow-pointing-down"/>

                </div>

                <div className="paragraph-text white-space-blurb">
                    <p>Joel James is a User Experience and
                    front end developer based in Melbourne. 
                    He plans, creates and grows authentic digital 
                    experiences for companies and individuals 
                    looking to have a positive impact 
                    on their customers lives.</p>
                </div>

                <div id="grid-background">
                    <div id="img-grid">
                        <img className="one" src={require(`../resources/grid/Cropped/bits (Medium).jpg`)} alt="books-and-gadgets"/>
                        <img className="two" src={require(`../resources/grid/Cropped/campaign (Medium).jpg`)} alt=""/>
                        <img className="three" src={require(`../resources/grid/Cropped/live (Medium).jpg`)} alt=""/>
                        <img className="four" src={require(`../resources/grid/Cropped/watchnphone (Medium).jpg`)} alt=""/>
                        <img className="five" src={require(`../resources/grid/Cropped/wide-smile.png`)} alt=""/>
                        <img className="six" src={require(`../resources/grid/Cropped/think (Medium).jpg`)} alt=""/>
                        <img className="seven" src={require(`../resources/grid/Cropped/workhard (Medium).jpg`)} alt=""/>
                    </div>
                </div>

            <div className="paragraph-text blurb">

                <p>I work for companies that work for their customers.</p>

            </div>

            <div className="dont-wait paragraph-text">

                <p className="what-else">What else would you like to know?</p>
                <button 
                className="go-to-contact-page" 
                onMouseDown={this.props.handleMouseDownContact} 
                >Get in touch</button>

                <img src={require(`../resources/icons/right-arrow.png`)} alt="link-to-about-page"/>

            </div>

            </div>
        )
    }
}

export default About;