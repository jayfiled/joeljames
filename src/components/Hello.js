import React, { Component } from 'react';
import '../css/Hello.css'
import 'font-awesome/css/font-awesome.min.css';
import Menu from './Menu';
import Nav from './Nav';

class Hello extends Component {
    constructor(props, context) {
        super(props, context);
     
        this.state = {
          visible: false
        };
     
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
      }

    toggleMenu = () => {
        this.setState({
            visible: !this.state.visible
        });
    }


    handleMouseDown(e) {
        this.toggleMenu();
        console.log('menu bar clicked')
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
            <Nav handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
            <p className="location">Melbourne</p>


            <div id="bring-up-nav">
                <span id="slide-right"></span>
                <i className="fa fa-angle-double-right"></i>
            </div>

        </div>   
    );
}
}

export default Hello;