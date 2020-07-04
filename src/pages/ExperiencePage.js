import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BreakLine from '../components/BreakLine';

import background from '../assets/images/background.png'


const styles = {
    container: {
        paddingTop: '10px',
        fontFamily: 'Prata'
    },
    scrollDiv: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(119,130,117,0.8)), url(${background})`,
        height: '530px',
        overflow: 'scroll',
        backgroundSize: 'unset',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        padding: '20px',
        fontFamily: 'Ubuntu'
    },
    title: {
        margin: '10px auto'
    },
    contentDiv1: {
        width: '2000px',
        margin: '0px 20px'
    },
    contentDiv2: {
        width: '2000px',
        margin: '0px 20px'
    },
    eachExp: {
        marginRight: '300px'
    },
    contentHeader: {
        fontWeight: 'bold',
        color: '#B6E8B0',
        marginBottom: '1px'
    },
    contentCompany: {
        fontSize: '15px'
    },
    contentPosTitle: {
        fontSize: '14px',
        fontWeight: 'bold',
        margin: '30px 0px 5px 0px'
    },
    contentText: {
        fontSize: '14px',
        color: '#DCE4DB ',
        lineHeight: '25px'
    },
    lineDiv: {
        margin: '15px 20px'
    },
    line: {
        display: 'inline-block',
        border: '1px solid',
        color: '#B6E8B0',
        width: '1980px',
    }
}

function ExperiencePage(props){

    return(
        <Jumbotron className='jumbotron-fluid bg-transparent'>
            <Container style={styles.container}>
                <Row className='justify-content-center'>
                    <div
                        style={styles.title}
                    >
                        <h2>{props.experience.title}</h2>
                        <BreakLine color='black' />
                    </div>
                </Row>
                <div className='k-background' style={styles.scrollDiv}>
                    <Row className='align-items-center h-100'>
                        <Col>
                            <div style={styles.contentDiv1}>
                                <Row>
                                    {
                                        props.experience.experiencesUpRow.map(experience => (
                                            <Col style={styles.eachExp} md={2} sm={2} xs={2}>
                                                <p style={styles.contentHeader}>{ experience.header }</p>
                                                <p style={styles.contentCompany}>{ experience.company }</p>
                                                <p style={styles.contentPosTitle}>{ experience.position }</p>
                                                <p style={styles.contentText}>{ experience.text }</p>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </div>
                            <div style={styles.lineDiv}>
                                <hr style={styles.line}/>
                            </div>
                            <div style={styles.contentDiv2}>
                                <Row className='justify-content-center'>
                                    {
                                        props.experience.experiencesDownRow.map(experience => (
                                            <Col style={styles.eachExp} md={2} sm={2} xs={2}>
                                                <p style={styles.contentHeader}>{ experience.header }</p>
                                                <p style={styles.contentCompany}>{ experience.company }</p>
                                                <p style={styles.contentPosTitle}>{ experience.position }</p>
                                                <p style={styles.contentText}>{ experience.text }</p>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Jumbotron>
    )
}

export default ExperiencePage;