import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Partners.css';

import griff from "./griff_team.svg";
import summit from "./summit-logo.svg";

export default class Partners extends Component {
  render() {
    return (
      <div>

        <Grid>
          <h2>Partners</h2>
          <Row className="display-flex">
            <Col xs={12} sm={4} className="partner-wrapper">
              <Image src="assets/partners/evalue_logo-small.png" className="partners-pic"/>
              <h3>Evalue</h3>
              <p>Cooperated on corporate and enterprice projects.</p>
            </Col>
            <Col xs={12} sm={4} className="partner-wrapper">
              <Image src="assets/partners/ablelogo.png" className="partners-pic"/>
              <h3>Able</h3>
              <p>Web development</p>
            </Col>
            <Col xs={12} sm={4} className="partner-wrapper">
              <Image src={griff} className="partners-pic"/>

              <h3>Griff team</h3>
              <p>Cooperated on corporate and enterprice projects.</p>
            </Col>
            <Col xs={12} sm={4} className="partner-wrapper">
              <Image src="assets/partners/logo-bsc.svg" className="partners-pic"/>
              <h3>BSC Ideas</h3>
              <p>Worked on banking project.</p>
            </Col>
            <Col xs={12} sm={4} className="partner-wrapper">
              <Image src="assets/partners/R_Altra_logo.svg" className="partners-pic"/>
              <h3>Refresh</h3>
              <p>Cooperated on corporate and enterprice projects.</p>
            </Col>
            <Col xs={12} sm={4} className="partner-wrapper">
              <Image src={summit} className="partners-pic"/>
              <h3>Summit</h3>
              <p>Cooperated on corporate and enterprice projects.</p>
            </Col>

          </Row>
        </Grid>
      </div>
    )
  }
}
