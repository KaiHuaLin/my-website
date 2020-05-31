import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



const styles = {
    inputs: {
        width: '500px'
    },
    message: {
        margin: '30px auto',
        width: '470px'
    }
}

class Email extends React.Component{

    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }


    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state.name);
    }


    handleSubmit = event => {
        event.preventDefault()

        fetch('http://localhost:3000/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if(response.status === 'success'){
                alert('Message sent')
                // reset form
            } else if(response.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }




    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Row className='justify-content-between' style={styles.inputs}>
                                <Col>
                                    <Form.Control
                                        name='name'
                                        type='text' 
                                        placeholder='Name' 
                                        onChange={this.handleChange}/>
                                </Col>
                                <Col>
                                    <Form.Control 
                                        name='email'
                                        type='email' 
                                        placeholder='Email' 
                                        onChange={this.handleChange}/>
                                </Col>
                            </Row>
                            <Row style={styles.message}>
                                <Form.Control 
                                    namw='message'
                                    as='textarea' 
                                    rows='8' 
                                    type='text' 
                                    placeholder='Message'
                                    onChange={this.handleChange}
                                />
                            </Row>
                            <Button 
                                variant="outline-success" 
                                block
                                onClick={this.handleSubmit}
                            >Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}



export default Email;