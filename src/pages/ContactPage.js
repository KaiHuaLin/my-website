import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Email from '../components/Email'


const styles = {
    container: {
        fontFamily: 'Ubuntu'
    },
    title: {
        margin: '10px auto 40px auto'
    },
    card: {
        backgroundColor: '#626262 ',
        padding: '30px 0',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 2px #C8C8C8',
        color: 'white'
    },
    section: {
        marginTop: '40px',
        // textDecoration: 'none'
    },
    infoDiv: {
        margin: '20px 0'
    },
    emailDiv: {
        margin: '20px 0'
    }
}

function ContactPage(props){
    return(
        <Jumbotron className='jumbotron-fluid bg-transparent' style={styles.container}>
            <Container>
                <Row className='justify-content-around' style={styles.card}>
                    <div style={styles.infoDiv}>
                        <Col>
                            <h1 style={styles.title}>Contact</h1>
                            <div style={styles.section}>
                                <h4>Email</h4>
                                <p><a style={{textDecoration: 'none', color: 'inherit'}} href={"mailto:" + props.email}>{props.email}</a></p>
                            </div>
                            <div style={styles.section}>
                                <h4>Phone</h4>
                                <p>{props.phone}</p>
                            </div>
                        </Col>
                    </div>
                    <div style={styles.emailDiv}>
                        {/* <Email /> */}
                    </div>
                </Row>
            </Container>
        </Jumbotron>
    )
}


export default ContactPage;