import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">


        <Grid className="">

          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="footer-items">

              <h4>email: radimsys@gmail.com</h4>

            </Col>
            <Col xs={12} sm={4} className="footer-items">
              <h4>Copyright 2018</h4>
            </Col>
            <Col xs={12} sm={4} className="footer-items">
              <h4>skype: radimsysel</h4>
            </Col>
          </Row>


        </Grid>
      </div>
    )
  }
}
