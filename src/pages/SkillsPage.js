import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BreakLine from '../components/BreakLine';


const styles = {
    container: {
        padding: '80px 0',
        backgroundColor: 'rgb(234, 236, 239)',
        fontFamily: 'Prata', 
        color: 'black'
    },
    title: {
        margin: '10px auto 40px auto'
    },
    category: {
        width: '350px',
        textAlign: 'center',
        marginTop: '40px',
        marginBottom: '40px'
    },
    subtitle: {
        borderBottom: '1px solid black',
        padding: '20px',
        marginBottom: '10px',
        fontWeight: 'bold'
    },
    item: {
        textAlign: 'center',
        padding: '8px'
    }
}

function SkillsPage(props){
    return (
        <Jumbotron className='jumbotron-fluid' style={styles.container}>
            <Container>
                <Row className='justify-content-center'>
                    <div 
                        style={styles.title}
                    >
                        <h2>{props.title}</h2>
                        <BreakLine color='black'/>
                    </div>
                </Row>
                <Row className='justify-content-around'>
                    <div style={styles.category}>
                        <Col>
                            <h4 style={styles.subtitle}>
                                {props.pLanguage.title}
                            </h4>
                            {
                                props.pLanguage.items.map(item => (
                                    <h5 style={styles.item}>{item}</h5>
                                ))
                            }
                        </Col>
                    </div>
                    <div style={styles.category}>
                        <Col>
                            <h4 style={styles.subtitle}>
                                {props.technology.title}
                            </h4>
                            {
                                props.technology.items.map(item => (
                                    <h5 style={styles.item}>{item}</h5>
                                ))
                            }
                        </Col>
                    </div>
                    <div style={styles.category}>
                        <Col>
                            <h4 style={styles.subtitle}>
                                {props.language.title}
                            </h4>
                            {
                                props.language.items.map(item => (
                                    <h5 style={styles.item}>{item}</h5>
                                ))
                            }
                        </Col>
                    </div>
                </Row>
            </Container>
        </Jumbotron>
    );
}


export default SkillsPage;