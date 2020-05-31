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
        margin: '10px auto 40px auto',
        marginBottom: '90px'
    },
    eduDiv: {
        textAlign: 'center',
        fontSize: '20px'
    },
    eachEdu: {
        marginBottom: '80px'
    }
}

function EducationPge(props){
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
                <Row>
                    <Col style={styles.eduDiv}>
                        <div style={styles.eachEdu}>
                            <h3>2017 - 2021</h3>
                            <p>University of Missouri - Columbia, MO Class of 2021</p>
                            <p>Bachelor of Science in Computer Science</p>
                            <p>Major GPA: 3.64 / 4.00</p>
                        </div>
                        <div style={styles.eachEdu}>
                            <h3>2014 - 2017</h3>
                            <p>Sacred Heart - Griffin High School, Springfield, IL Class of 2017</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}


export default EducationPge;