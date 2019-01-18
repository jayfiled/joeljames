import React from 'react';
import '../css/PortCard.css';

const PortCard = () => {
    return (
        <div id="card-container">
            <div className="card-top">
                <div className="tut-lang">CSS</div>
                <div className="card-title">HOW TO CHANGE THE DEFAULT HYPERLINK STYLE</div>
                <div className="tut-author">Joel </div>
                <div className="tut-pic"><img src="http://0.gravatar.com/avatar/fd93b9c0bdf8ccd4fa47f03ec2dbe29f?s=108&d=mm&r=g" alt="author-pic" /></div>
            </div>
            <div className="card-bottom">
                <p> One of the first things I wanted to when I made my first website was change the default style of the hyperlinks. After all, my site was going to reference all the amazing things that I have found that helped me ..</p>
            </div>
      </div>    
    );
};

export default PortCard;
