import React from 'react';
import '../css/PortCard.css';
import 'font-awesome/css/font-awesome.min.css';


const PortCard = ({ id, lang, name, url, source, picPath, impactStatement, RemovePageBackHandler, AddPageBackHandler}) => {

// console.log(killLinkOnSearch);

    return (
        <div id="card-container" 
        onMouseEnter={RemovePageBackHandler} 
        onMouseOut={AddPageBackHandler}
        >
            <div className="card-top" >
                <div className="tut-lang"><sup>{lang}</sup></div>
                <div className="card-title">{name}</div>
                <div className="card-ref">
                    <p>{impactStatement}</p>
                    <a href={`${source}`} title="Click to view source"><i className="fa fa-github"></i></a>
                </div>
            </div>
            <div className="card-bottom">
                <a href={`${url}`} title="Click to view site"><img src={require(`../resources/portPics/${picPath}.png`)} alt="portfolio-site-snapshot"/></a>
            </div>
      </div>    
    );
};

export default PortCard;