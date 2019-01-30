import React, { Component } from 'react';
import '../css/Hello.css'
import 'font-awesome/css/font-awesome.min.css';
import Menu from './Menu';
import Nav from './Nav';
import Portfolio from './Portfolio';
import About from './About';
import cardData from '../data/cardData';

class Hello extends Component {
    constructor(props, context) {
        super(props, context);
     
        this.state = {
          navVisible: false,
          portVisible: false,
          aboutVisible: false,
          searchField: '',
          screenSize: window.screen.width
        };
     
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

        this.handleMouseDownNav = this.handleMouseDownNav.bind(this);
        this.togglePort = this.togglePort.bind(this);

        // this.handleMouseOver = this.handleMouseOver.bind(this);
        // this.killLinkOnSearch = this.killLinkOnSearch.bind(this);
      }

    toggleMenu = () => {
        this.setState({
            navVisible: !this.state.navVisible,
            portVisible: false
        });
    }

    togglePort = () => {
        this.setState({
            navVisible: true,
            portVisible: !this.state.portVisible
        });
    }


    handleMouseDown(e) {
        this.toggleMenu();
        e.stopPropagation();
    }

    handleMouseDownNav(e) {
        this.togglePort();
        e.stopPropagation();
    }

    handleMouseDownAbout = (e) => {
        this.setState({
            aboutVisible: !this.state.aboutVisible
        })
    }

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
        
render() {

    const { searchField } = this.state;

    const filteredCards = cardData.filter(portCard => {
        return portCard.lang.join(' ').toLowerCase().includes(searchField.toLowerCase());
    })

    return (
            <div className="main-wrapper">

            <div id="land-header">
                <h3>Joel James</h3>
            </div>

            <div id="land-title">
                <h1>Front End Web Developer</h1>
            </div>

            <Menu handleMouseDown={this.handleMouseDown} />
            <Nav handleMouseDown={this.handleMouseDown}
                handleMouseDownNav={this.handleMouseDownNav} 
                handleMouseDownAbout={this.handleMouseDownAbout}  
                menuVisibility={this.state.navVisible} />
            <p className="location">Melbourne</p>

            <Portfolio 
                handleMouseDownNav={this.handleMouseDownNav} 
                portVisibility={this.state.portVisible} 
                cardData={filteredCards} 
                searchChange={this.onSearchChange} 
                smallScreen={this.smallScreen} 
                screenSize={this.state.screenSize} 
                killLinkOnSearch={this.killLinkOnSearch} 
                />

            <About 
            handleMouseDownAbout={this.handleMouseDownAbout} 
            aboutVisibility={this.state.aboutVisible} 
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