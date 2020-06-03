import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaGithub, FaLinkedin, FaInstagramSquare} from 'react-icons/fa'
import {MdKeyboardArrowDown} from 'react-icons/md';

import BreakLine from '../components/BreakLine'

import backgroundSelf from '../assets/images/backgroundSelf.png'


function Hero(props){
    return(
        <Jumbotron className = 'jumbotron-fluid p-0'>
            <Container 
                className='k-background'
                style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(${backgroundSelf})`}}
            >
                <Row className = 'justify-content-start py-4'>
                    <Col className='text-center mt-5' md = {6} sm = {12} xs = {12}>
                        {props.title && <h1 className = 'display-1 font-weight-bolder'>{props.title}</h1>}
                        {props.subtitle && <h3 className = 'display-4 font-weight-light'>{props.subtitle}</h3>}
                        {props.text && <h3 className = 'lead font-weight-light py-3'>{props.text}</h3>}
                        
                        <div style={{
                            margin: '60px auto 40px auto',
                            width: '90%'
                        }}>
                            <BreakLine color='white'/>
                        </div>

                        <Row className = 'justify-content-around py-4'>
                            <h1 className='display-3 k-link'><a href={ props.links[0].link } target='_blank' style={{color: 'inherit'}} rel="noopener noreferrer"><FaGithub /></a></h1>
                            <h1 className='display-3 k-link'><a href={ props.links[1].link } target='_blank' style={{color: 'inherit'}} rel="noopener noreferrer"><FaLinkedin /></a></h1>
                            <h1 className='display-3 k-link'><a href={ props.links[2].link } target='_blank' style={{color: 'inherit'}} rel="noopener noreferrer"><FaInstagramSquare /></a></h1>
                        </Row>
                    </Col>
                </Row>
                <h1 className='display-4 text-center k-link py-1'>
                    <a href={ props.nextPageLink } style={{color: 'inherit'}}>
                        <MdKeyboardArrowDown />
                    </a>
                </h1>
            </Container>
        </Jumbotron>
    );
}

export default Hero;