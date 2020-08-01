import React from 'react';

import Hero from '../components/Hero';




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
        </div>
    );
}

export default HomePage;