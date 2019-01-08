import React, { Component } from 'react';
import '../css/Hello.css'
import 'font-awesome/css/font-awesome.min.css';
import Menu from './Menu';
import Nav from './Nav';

class Hello extends Component {
    state = { //state test
        people: [
            { name: 'Joel', age: 34},
            { name: 'Saya', age: 5},
            { name: 'Kenzo', age: 3}
        ]
    }
    slideNavFromRight = () => {
        console.log('Was clicked', this.state.people[0].name);
        
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
    }


    render() {
    return (
        <div>
            <Nav />
                <div>

                    <div className="land-header">
                        <h3>Joel James</h3>
                    </div>

                    <div className="land-title">
                        <h1>Front End Web Developer</h1>
                    </div>

                    <button className="bring-up-nav" onClick={this.slideNavFromRight} ><Menu /></button> 

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