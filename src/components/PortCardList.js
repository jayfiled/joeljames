import React from 'react';
import PortCard from './PortCard';
import '../css/PortCard.css';
import '../css/PortCardList.css';

const PortCardList = ({cardData}) => {
    const portCardArray = cardData.map((element, index) => 
    
    <PortCard 
    key={element.id} 
    lang={element.lang.join(' ')} 
    name={element.name} 
    url={element.url} 
    source={element.source} 
    picPath={element.picPath} 
    />
    
    );
    // console.log(portCardArray);

    return portCardArray

};

export default PortCardList;