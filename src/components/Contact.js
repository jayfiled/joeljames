import React, { Component } from 'react';
import PortCardList from './PortCardList';
import '../css/Portfolio.css';
import SearchBox from '../components/SearchBox';
// import PortBackButton from './PortBackButton';

class Portfolio extends Component {
    render(props) {
        
        let portVisibility = 'hide';

        if (this.props.portVisibility)
            portVisibility = 'show';
        
            let eventOnDesktop = this.props.handleMouseDownNav;

        if (this.props.screenSize < 982)
            eventOnDesktop = this.props.smallScreen;
        // console.log(window.screen.width);

        return (
            <div id="contact-page" 
            className={portVisibility}
            onMouseDown={eventOnDesktop}>
                    <div className="back-and-search">
                        <div className="close" 
                        onMouseDown={this.props.handleMouseDownNav}>
                        </div>
                         <SearchBox 
                        searchChange={this.props.searchChange}
                        />
                    </div>
                    <PortCardList cardData={this.props.cardData}/>              
                </div>
        )
    }
}

export default Portfolio;