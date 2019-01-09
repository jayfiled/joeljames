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
        
/* In order to slide the nav page from the right, In Nav.js change:

div.nav to {
     left: 0;
     display: flex;

Then set display: none on all the classes below.  Or remove the elements from the DOM
  .land-header
  .land-title
  .bring-up-nav
  .location
  .bring-up-nav
  .slide-right
  .fa fa-angle-double-right

* [  ] have to also set an animation and transition property on the nav page * 

*/
render() {
    return (
        <div>
            
            <div>

                <div className="land-header">
                    <h3>Joel James</h3>
                </div>

                <div className="land-title">
                    <h1>Front End Web Developer</h1>
                </div>

                <Menu handleMouseDown={this.handleMouseDown} />
                <Nav handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
                <p className="location">Melbourne</p>


                <div className="bring-up-nav">
                    <span className="slide-right"></span>
                    <i className="fa fa-angle-double-right"></i>
                </div>

            </div>
        </div>    
    );
}
}

export default Hello;