import React, { Component } from 'react';
import PortCardList from './PortCardList';
import '../css/Portfolio.css';
import SearchBox from '../components/SearchBox';

class Portfolio extends Component {
    render(props) {
        
        let portVisibility = 'hide';

        if (this.props.portVisibility)
            portVisibility = 'show';

            // I have access to the cardData array
            // I want to create many Portfolio cards and fill in their data with the 
            // data from the dataCard array.

            // I want to send the values from each element in the array 
            // to the PortCard component via attributes 

            // Solution 1:
                // Make lots of PortCard elements, and manually assign it the attributes, i.e:
                // <PortCard id={this.props.cardData[0].id} lang={this.props.cardData[0].lang.join(' ')} name={this.props.cardData[0].name} picPath={this.props.cardData[0].picPath} /> 
            // console.log(cardData[0].lang.join());

            // Solution 2:
            // Use array.prototype.map() to map over the carddata array and return a <PortCard>
            // component with attributes matching to each element within the array.
            // Problem: Map returns an array, how to render an array?
            // Solution: Build a component that has some logic to return an array of components. 
            // React supports this.


        return (
            <div id="portfolio-page" 
            className={portVisibility}>
                    <SearchBox className='search'/>
                    <PortCardList cardData={this.props.cardData}/>              
                </div>
        )
    }
}

export default Portfolio;