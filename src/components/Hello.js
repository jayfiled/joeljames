import React, { Component } from 'react';
import '../css/Hello.css'
import 'font-awesome/css/font-awesome.min.css';
import Menu from './Menu';
import Nav from './Nav';
import Portfolio from './Portfolio';

class Hello extends Component {
    constructor(props, context) {
        super(props, context);
     
        this.state = {
          navVisible: false,
          portVisibile: false
        };
     
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

        this.handleMouseDownNav = this.handleMouseDownNav.bind(this);
        this.togglePort = this.togglePort.bind(this);

      }

    toggleMenu = () => {
        this.setState({
            navVisible: !this.state.navVisible,
            portVisibile: false
        });
    }

    togglePort = () => {
        this.setState({
            navVisible: false,
            portVisibile: !this.state.navVisible
        })
    }


    handleMouseDown(e) {
        this.toggleMenu();
        console.log('menu bar clicked')
        e.stopPropagation();
    }

    handleMouseDownNav(e) {
        this.togglePort();
        console.log('portfolio clicked')
        e.stopPropagation();
    }
        
render() {
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
                 menuVisibility={this.state.navVisible} 
                 handleMouseDownNav={this.handleMouseDownNav} 
                 navVisibility={this.state.portVisibile} />
            <p className="location">Melbourne</p>

            <Portfolio handleMouseDownNav />


            <div id="bring-up-nav">
                <span id="slide-right"></span>
                <i className="fa fa-angle-double-right"></i>
            </div>

        </div>   
    );
}
}

export default Hello;