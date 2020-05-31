import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import githubPic from '../assets/images/github.png';
import linkedInPic from '../assets/images/linkedin.png';

class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {  
            items: [
                {
                    id: 0,
                    title: 'linkedin',
                    subtitle: 'my linkedIn page',
                    imgSrc: linkedInPic,
                    link: 'https://www.linkedin.com/in/kai-hua-lin-a5086a174/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'github',
                    subtitle: 'my github page',
                    imgSrc: githubPic,
                    link: 'https://github.com/KaiHuaLin',
                    selected: false
                }
            ]
        }
    }


    handleCardHover = id => {
        let items = [...this.state.items];

        items[id].selected = true;

        this.setState({ items });
    }

    handleCardUnhover = id => {
        let items = [...this.state.items];

        items[id].selected = false;

        this.setState({ items });
    }


    makeItems = items => {
        return items.map(item => {
            return <Card 
                    item = {item} 
                    mouseEnter = {e => this.handleCardHover(item.id, e)} 
                    mouseLeave = {e => this.handleCardUnhover(item.id, e)} 
                    key = {item.id}
                />
        })
    }

    
    render() { 
        return ( 
            <Container fluid = {true}>
                <Row className = 'justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}
 
export default Carousel;