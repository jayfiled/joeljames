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

        return (
            <div id="portfolio-page" 
            className={portVisibility}
            onMouseDown={this.props.handleMouseDownNav}>
                    <div className="back-and-search">
                         {/* <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 224 224'
                            >
                            <g 
                            onMouseDown={this.props.handleMouseDownNav} 
                            fill='none' strokeMiterlimit='10' fontFamily='none' fontWeight='none'
                            fontSize='none' textAnchor='none'>
                                <path d='M0,224v-224h224v224z' />
                                <g fill='#fff'>
                                    <path d='M50.53125,40.46875l-10.0625,10.0625l61.46875,61.46875l-61.46875,61.46875l10.0625,10.0625l61.46875,-61.46875l61.46875,61.46875l10.0625,-10.0625l-61.46875,-61.46875l61.46875,-61.46875l-10.0625,-10.0625l-61.46875,61.46875z'
                                    id='surface1' />
                                </g>
                            </g>
                        </svg> */}
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