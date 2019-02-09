import React, { Component } from 'react';
import '../css/Contact.css';
import 'font-awesome/css/font-awesome.min.css';



class Contact extends Component {
    render(props) {
        
        let contactVisibility = 'hide';

        if (this.props.contactVisibility)
            contactVisibility = 'show';
        
            // let eventOnDesktop = this.props.handleMouseDownContact;

        // if (this.props.screenSize < 982)
        //     eventOnDesktop = this.props.smallScreen;
        // console.log(window.screen.width);

        return (
            <div id="contact-page" 
            className={contactVisibility}
            // onMouseDown={eventOnDesktop}
            >

                <div className="landing-picture-background contact-background">

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
                    <img src={require(`../resources/icons/arrow-down.png`)} alt="arrow-pointing-down"/>
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
                        <div className='item white-space-blurbs'>
                            <p className="bold-text">Enquiries</p>
                            <p>joel.james@outlook.com</p>
                        </div>
                        <div className='item'>
                        <a href={`https://github.com/jayfiled/`} title="Click to view my GitHub profile"><i className="fa fa-github"></i></a>
                        <a href={`https://www.linkedin.com/in/joel-james-04555849/`} title="Click to view my LinkedIn profile"><i className="fa fa-linkedin"></i></a>
                            
                        </div>
                    <div className="location"></div>
                </div>

                <div className="dont-wait paragraph-text">
                    <p className="what-else">What are you waiting for?</p>
                    <a href="mailto:joel.james@outlook.com"><p className="go-to-contact-page">Get in touch</p></a>
                    <a href="mailto:joel.james@outlook.com"><img src={require(`../resources/icons/right-arrow.png`)} alt="link-to-about-page"/></a>
                </div>
               
                </div>
        )
    }
}

export default Contact;