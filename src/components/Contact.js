import React, { Component } from 'react';
import '../css/Contact.css';


class Contact extends Component {
    render(props) {
        
        let contactVisibility = 'hide';

        if (this.props.contactVisibility)
            contactVisibility = 'show';
        
            let eventOnDesktop = this.props.handleMouseDownContact;

        if (this.props.screenSize < 982)
            eventOnDesktop = this.props.smallScreen;
        // console.log(window.screen.width);

        return (
            <div id="contact-page" 
            className={contactVisibility}
            onMouseDown={eventOnDesktop}>

                <div className="landing-picture-background">

                    <div className="close" 
                        onMouseDown={this.props.handleMouseDownContact}>
                    </div>

                    <div>
                        <h3>Contact</h3>
                        {/* <MenuForAbout /> */}

                    </div>

                    <div>
                        <h1>If I can help you with a project, please get in touch</h1>
                    </div>
                    {/* css down arrow */}

                </div>

                <div className="contact-addresses">
                    <div className="paragraph-text white-space-blurb">
                        <p> I work with companies of all shapes and sizes from all walks
                            of life.  If there's a project that you think we would be a good 
                            fit for, get in touch.  If you're not sure, get in touch anyway.
                            I can shed light on the process.
                        </p>
                    </div>
                </div>
                <div className="enquiries">
                        <div className='item'>
                            <p className="bold-text">Enquiries</p>
                            <p>joel.james@outlook.com</p>
                        </div>
                        <div className='item'>
                            <a href="https://github.com/jayfiled/">GitHub</a>
                            <a href="https://www.linkedin.com/in/joel-james-04555849/">LinkedIn</a>
                            
                        </div>
                    <div className="location"></div>
                </div>

                <div className="dont-wait paragraph-text">
                    <p className="what-else">What are you waiting for?</p>
                    <p className="go-to-contact-page">Get in touch</p>
                </div>
               
                </div>
        )
    }
}

export default Contact;