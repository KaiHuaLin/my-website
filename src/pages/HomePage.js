import React from 'react';

import Hero from '../components/Hero';
// import Carousel from '../components/Carousel';




function HomePage(props){

    return(
        <div>
            <Hero 
                title = { props.title } 
                subtitle = { props.subtitle } 
                text = { props.text }
                links = { props.links }
                nextPageLink = { props.nextPageLink }
            />
            
            {/* <Carousel /> */}
        </div>
    );
}

export default HomePage;