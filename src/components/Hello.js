import React, { Component } from 'react';
import '../css/Hello.css'
import 'font-awesome/css/font-awesome.min.css';
import Menu from './Menu';
import Nav from './Nav';
import Portfolio from './Portfolio';
import cardData from '../data/cardData';

class Hello extends Component {
    constructor(props, context) {
        super(props, context);
     
        this.state = {
          navVisible: false,
          portVisible: false,
          searchField: ''
        };
     
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

        this.handleMouseDownNav = this.handleMouseDownNav.bind(this);
        this.togglePort = this.togglePort.bind(this);

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
        console.log('menu bar clicked')
        e.stopPropagation();
    }

    handleMouseDownNav(e) {
        this.togglePort();
        console.log('portfolio clicked');
        e.stopPropagation();
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
    }
        
render() {

    const { searchField } = this.state;

    const filteredCards = cardData.filter(portCard => {
        return portCard.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
            <div>

            <div id="land-header">
                <h3>Joel James</h3>
            </div>

            <div id="land-title">
                <h1>Front End Web Developer</h1>
            </div>

            <Menu handleMouseDown={this.handleMouseDown} />
            <Nav handleMouseDown={this.handleMouseDown}
                handleMouseDownNav={this.handleMouseDownNav} 
                menuVisibility={this.state.navVisible} />
            <p className="location">Melbourne</p>

            <Portfolio 
                handleMouseDownNav  
                portVisibility={this.state.portVisible} 
                cardData={filteredCards} 
                searchChange={this.onSearchChange}
                />


            <div id="bring-up-nav">
                <span id="slide-right"></span>
                <i className="fa fa-angle-double-right"></i>
            </div>

        </div>   
    );
}
}

export default Hello;