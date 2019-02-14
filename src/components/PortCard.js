import React from 'react';
import '../css/PortCard.css';
import 'font-awesome/css/font-awesome.min.css';


const PortCard = ({ id, lang, name, url, source, picPath, impactStatement, killLink }) => {

// console.log(url);

    return (
        <div id="card-container" 
        onMouseOver={killLink}>
            <div className="card-top">
                <div className="tut-lang"><sup>{lang}</sup></div>
                <div className="card-title">{name}</div>
                <div className="card-ref">
                    <p>{impactStatement}</p>
                    <a href={`${source}`} title="Click to view source"><i className="fa fa-github"></i></a>
                </div>
            </div>
            <div className="card-bottom">
                <a href={`${url}`} ><img src={require(`../resources/portPics/${picPath}.png`)} alt="portfolio-site-snapshot"/></a>
            </div>
      </div>    
    );
};

export default PortCard;