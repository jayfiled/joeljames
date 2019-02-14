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
        // console.log(this.props.killLinkOnSearch);

        return (
            <div id="portfolio-page" 
            className={portVisibility}
            onMouseDown={eventOnDesktop}>
                    <div className="back-and-search">
                        <div className="close" 
                        onMouseDown={this.props.handleMouseDownNav}>
                        </div>
                         <SearchBox 
                        searchChange={this.props.searchChange} 
                        killLinkOnSearch={this.props.killLinkOnSearch}
                        />
                    </div>
                    <PortCardList cardData={this.props.cardData} 
                    killLinkOnSearch={this.props.killLinkOnSearch} 
                    />              
                </div>
        )
    }
}

export default Portfolio;