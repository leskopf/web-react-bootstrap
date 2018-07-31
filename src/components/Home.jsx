import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import Partners from './Partners';
import HeaderHome from './HeaderHome';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderHome />

        <Grid className="">

        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Web development</h3>
            <p>Would you like web based on CMS Drupal or Wordpress ? Don hesitate to contact me !</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
            <h3>Frontend development</h3>
            <p>Are you looking for somebody, to be a part of you team on corporate or enterprise projects ? Contact me !</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h3>Responsive design</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
        </Row>
        <Partners />

      </Grid>
      </div>
    )
  }
}
