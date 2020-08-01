import React, { useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import AOS from 'aos'
import 'aos/dist/aos.css'

import BreakLine from '../components/BreakLine';

import selfPic from '../assets/images/self.png'


const styles = {
    container: {
        paddingTop: '80px',
        fontFamily: 'Prata'
    },
    title: {
        margin: '10px auto 40px auto'
    },
    card: {
        backgroundColor: '#EAEAEA',
        padding: '30px 0',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 2px #C8C8C8  ',
    },
    selfPicture: {
        width: '250px',
        height: '400px',
        marginBottom: '20px',
        borderRadius: '5px'
    },
    text: {
        width: '60%',
        textAlign: 'center',
        lineHeight: '50px',
        color: 'black',
        fontSize: '20px'
    }
}

function AboutPage(props){
    useEffect(() => {
        AOS.init()
    }, [])

    return(
        <Jumbotron className='jumbotron-fluid bg-transparent' style={styles.container}>
            <Container data-aos="fade-right">
                <Row className='justify-content-center'>
                    <div
                        style={styles.title}
                    >
                        <h2>{props.title}</h2>
                        <BreakLine color='black' />
                    </div>
                </Row>
                <Row className='justify-content-around align-items-center' style={styles.card}>
                    <div>
                        <img src={selfPic} alt={selfPic} style={styles.selfPicture}/>
                    </div>
                    <div style={styles.text}>
                        {props.text}
                    </div>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default AboutPage;