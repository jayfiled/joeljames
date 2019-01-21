import React, { Component } from 'react';
import PortCardList from './PortCardList';
import '../css/Portfolio.css';
import SearchBox from '../components/SearchBox';

class Portfolio extends Component {
    render(props) {
        
        let portVisibility = 'hide';

        if (this.props.portVisibility)
            portVisibility = 'show';

        return (
            <div id="portfolio-page" 
            className={portVisibility}>
                    <SearchBox 
                    searchChange={this.props.searchChange}
                    />
                    <PortCardList cardData={this.props.cardData}/>              
                </div>
        )
    }
}

export default Portfolio;