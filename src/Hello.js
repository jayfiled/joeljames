import React, { Component } from 'react';
import './Hello.css'
import 'font-awesome/css/font-awesome.min.css';

const Hello = () => {
    return (
        <div>

            <div className="land-header">
                <h3>Joel James</h3>
            </div>

            <div className="land-title">
                <h1>Front End Web Developer</h1>
            </div>

            <p className="location">Melbourne</p>

            <div className="bring-up-nav">
                <span className="slide-right"></span>
                <i className="fa fa-angle-double-right"></i>
            </div>

        </div>
    );
}

export default Hello;