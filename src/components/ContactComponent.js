import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';
import Center from 'react-center';
import * as emailjs from 'emailjs-com';

const required = (val) => val && val.length;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.handleContact = this.handleContact.bind(this);
  }

  handleContact(values){
    console.log("Login button clicked")

    var service_id = 'gmail';
    var template_id = 'dancing_queens';
    var template_params = {
        name: values.name,
        email: values.email,
        message: values.message
    };
    var user_id = 'user_O4nT4Hy0QrmUhB1xmV3pU';

    emailjs.send(service_id,template_id,template_params,user_id)
        .then((response) => {
            alert('Email sent!');
            console.log(response.status, response.text);
        }, (err) => {
            alert('Email failed.');
            console.log(err);
        });

    this.props.resetContact();
  }

  render() {
    return (
      <div className = "container">
        <br/><br/><br/><br/>
        <Center>
            <h2> Contact Us </h2>
        </Center>
        <br/><br/>
        <Form model="contact" onSubmit={(values) => this.handleContact(values)}>
          <Row className="form-group">
              <Col md={{ size: 4, offset: 2 }}>
                  <Control.text model=".name" id="name" name="name"
                      placeholder="Name"
                      className="form-control"
                      validators={{
                          required
                      }} />
                  <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                          required: 'Required. '
                      }}
                  />
              </Col>
              <Col md={{ size: 4 }}>
                  <Control.text model=".email" id="email" name="email"
                      placeholder="Email"
                      className="form-control"
                      validators={{
                          required, validEmail
                      }} />
                  <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                          required: 'Required. ',
                          validEmail: 'Invalid Email Address. '
                      }}
                  />
              </Col>
              <Col>
                <Button type="submit" color="dark">
                  Send
                </Button>
            </Col>
          </Row>
          <Row className="form-group">
            <Col md={{ size: 8, offset: 2 }}>
                <Control.textarea model=".message" id="message" name="message"
                    placeholder="Message"
                    className="form-control"
                    rows="12" 
                    validators={{
                        required
                    }} />
                <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                        required: 'Required. '
                    }}
                />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
