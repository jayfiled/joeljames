import React, { Component } from 'react';
import PortCard from '../components/PortCard';
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
                <SearchBox />
                <PortCard />
            </div>
        )
    }
}

export default Portfolio;