import React from 'react';
import '../css/PortCard.css';
import 'font-awesome/css/font-awesome.min.css';


const PortCard = ({ id, lang, name, picPath }) => {

console.log(id, lang, name, picPath);

    return (
        <div id="card-container">
            <div className="card-top">
                <div className="tut-lang"><sup>{lang}}</sup></div>
                <div className="card-title">{name}</div>
                <div className="card-ref">
                    <a href="#" title="Click to view source"><i className="fa fa-github"></i></a> 
                    <a href="#" title="Click to vew site"><i className="fa fa-desktop"></i></a>
                </div>
            </div>
            <div className="card-bottom">
                <img src={require(`../resources/portPics/${picPath}.png`)} alt="portfolio-site-snapshot"/>
            </div>
      </div>    
    );
};

export default PortCard;