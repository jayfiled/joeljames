import React, { Component } from 'react';
import '../css/Hello.css'
import 'font-awesome/css/font-awesome.min.css';
import Menu from './Menu';
import Nav from './Nav';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import cardData from '../data/cardData';

class Hello extends Component {
    constructor(props, context) {
        super(props, context);
     
        this.state = {
          navVisible: false,
          portVisible: false,
          aboutVisible: false,
          contactVisible: false,
          searchField: '',
          screenSize: window.screen.width,
          portCardBeingHovered: false
        };
     
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

        this.handleMouseDownNav = this.handleMouseDownNav.bind(this);
        this.togglePort = this.togglePort.bind(this);

        this.handleMouseDownAbout = this.handleMouseDownAbout.bind(this);
        this.toggleAbout = this.toggleAbout.bind(this);

        this.handleMouseDownContact = this.handleMouseDownContact.bind(this);
        this.toggleContact = this.toggleContact.bind(this);

        this.handlePortCardBeingHovered = this.handlePortCardBeingHovered.bind(this);
        this.togglePortCardBeingHovered = this.togglePortCardBeingHovered.bind(this);

        // this.handleMouseOver = this.handleMouseOver.bind(this);
        // this.killLinkOnSearch = this.killLinkOnSearch.bind(this);
      }

    toggleMenu = () => {

        this.setState({
            navVisible: !this.state.navVisible,
            portVisible: false,
            aboutVisible: false,
            contactVisible: false
        });
    }

    togglePort = () => {
        this.setState({
            navVisible: true,
            portVisible: !this.state.portVisible
        });
    }

    toggleAbout = () => {
        this.setState({
            navVisible: true,
            aboutVisible: !this.state.aboutVisible
        });
    }

    toggleContact = () => {
        window.scrollTo(0, 0)
        
        this.setState({
            navVisible: true,
            contactVisible: !this.state.contactVisible,
            aboutVisible: false
        });
    }

    togglePortCardBeingHovered = () => {
        this.setState({
            portCardBeingHovered: !this.state.portCardBeingHovered
        });
    }


    handleMouseDown(e) {
        this.toggleMenu();
        e.stopPropagation();
        
    }

    handleMouseDownNav(e) {
        const gitHub = document.querySelector('.fa');
        const search = document.querySelector('input');
        const image = document.querySelector('img');
        const links = document.querySelector('a');
        console.log(search, gitHub, image, links)
        console.log(e.target)
        if (e.target !== search)
         {
        this.togglePort();
        e.stopPropagation();
         }
    }

    handleMouseDownAbout(e) {
        this.toggleAbout();
        e.stopPropagation();
    }

    handleMouseDownContact(e) {
        this.toggleContact();
        e.stopPropagation();
    }

    handleEnter = (e) => {
console.log(e.charCode  );
        if (e.charCode === 0)
        this.setState(
            {
                navVisible: true
            }
        )     
    }

    handlePortCardBeingHovered(e) {
        this.togglePortCardBeingHovered();
        e.stopPropagation();
    }

    /* 
    testing to see whether there are issues using arrow functions and binding
    DON't use a variety of binding the 'this' object and using arrow functions to reference
    the current function scope
    */

   /* handleMouseDownAbout = (e) => {
        console.log(this.state.aboutVisible);
        this.setState({
            aboutVisible: !this.state.aboutVisible,
            navVisible: true
        })
        console.log(this.state.aboutVisible);

    }

    handleMouseDownContact = (e) => {
        console.log('clicked');
        this.setState({
            contactVisible: !this.state.contactVisible,
            navVisible: true
        })
    }
*/
    
handleMouseOver(e) {
        this.setState({
            screenSize: 421
        })
    }

    smallScreen() {
        console.log(`You've clicked the background on a small screen`)
    }

    killLinkOnSearch = (e) => {
        console.log('Input field hovered!');
        this.setState({
            portVisible: true
        })
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    //  a function that removes the onMouseDown={eventOnDesktop} from the #portfolio-page div

    // except it doesn't.... need to fix
    RemovePageBackHandler = () => {
    // console.log('Mouse moved in');

    //     document.getElementById('portfolio-page').removeEventListener('onMouseDown', this.handleMouseDownNav)
    //     console.log('There should be no event handler: ', document.getElementById('portfolio-page'));

    }

    AddPageBackHandler = () => {
        // console.log('Mouse moved out');
        // document.getElementById('portfolio-page').addEventListener('onMouseDown', this.handleMouseDownNav)
        // console.log('There should now be an event handler: ', document.getElementById('portfolio-page'));
    }
        
render() {

    const { searchField } = this.state;

    const filteredCards = cardData.filter(portCard => {
        return portCard.lang.join(' ').toLowerCase().includes(searchField.toLowerCase());
    })
// console.log(this.handleMouseDown)
    return (
            <div className="main-wrapper">

            <div id="land-header">
                <h3>Joel James</h3>
            </div>

            <div id="land-title">
                <h1>Front End Web Developer</h1>
            </div>

            <Menu handleMouseDown={this.handleMouseDown} 
            handleEnter={this.handleEnter} />

            <Nav handleMouseDown={this.handleMouseDown}
                handleMouseDownNav={this.handleMouseDownNav} 
                handleMouseDownAbout={this.handleMouseDownAbout} 
                handleMouseDownContact={this.handleMouseDownContact}   
                menuVisibility={this.state.navVisible} 
                aboutVisibility={this.state.aboutVisible} 
                />
            <p className="location">Melbourne</p>

            <Portfolio 
                handleMouseDownNav={this.handleMouseDownNav} 
                portVisibility={this.state.portVisible} 
                cardData={filteredCards} 
                searchChange={this.onSearchChange} 
                smallScreen={this.smallScreen} 
                screenSize={this.state.screenSize} 
                killLinkOnSearch={this.killLinkOnSearch} 
                RemovePageBackHandler={this.RemovePageBackHandler} 
                AddPageBackHandler={this.AddPageBackHandler} 
                />

            <About 
            handleMouseDownAbout={this.handleMouseDownAbout} 
            aboutVisibility={this.state.aboutVisible} 
            handleMouseDownContact={this.handleMouseDownContact} 
            handleMouseDown={this.handleMouseDown}
            />

            <Contact 
            handleMouseDownContact={this.handleMouseDownContact} 
            contactVisibility={this.state.contactVisible} 
            />



            {/* <div id="bring-up-nav">
                <span id="slide-right"></span>
                <i className="fa fa-angle-double-right"></i>
            </div> */}

        </div>   
    );
}
}

export default Hello;