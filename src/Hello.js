import React, { Component } from 'react';
import './Hello.css'
import 'font-awesome/css/font-awesome.min.css';
import Menu from './Menu';
import Nav from './Nav';

const Hello = () => {
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

                    <Menu />

                    <p className="location">Melbourne</p>


                    <div className="bring-up-nav">
                        <span className="slide-right"></span>
                        <i className="fa fa-angle-double-right"></i>
                    </div>

                </div>
        </div>    
    );
}

export default Hello;