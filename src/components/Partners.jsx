import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Partners.css';

// import griff from "./griff_team.svg";
// import summit from "./summit-logo.svg";

const partners = [
  {
    id: 0,
    image: "assets/partners/evalue_logo-small.png",
    name: "Evalue",
    description: "Cooperated on corporate and enterprice projects."
  },
  {
    id: 1,
    image: "assets/partners/ablelogo.png",
    name: "ABLE",
    description: "Web development"
  },
  {
    id: 2,
    image: "assets/partners/griff_team.svg",
    name: "GriffTeam",
    description: "Cooperated on corporate and enterprice projects."
  },
  {
    id: 3,
    image: "assets/partners/logo-bsc.svg",
    name: "BSC Ideas",
    description: "Cooperated on corporate and enterprice projects."
  },
  {
    id: 4,
    image: "assets/partners/refresh-logo.png",
    name: "Refresh",
    description: "Cooperated on corporate and enterprice projects."
  },
  {
    id: 5,
    image: "assets/partners/summit-logo.svg",
    name: "Summit",
    description: "Cooperated on corporate and enterprice projects."
  }

];


export default class Partners extends Component {

  render() {
    return (
      <div>

        <Grid>
          <h2>Partners</h2>
          <Row className="display-flex">
            {partners.map(i => {
              return <Col xs={12} sm={4} className="partner-wrapper">
                  <Image src={i.image} className="partners-pic"/>
                  <h3>{i.name}</h3>
                  <p>{i.description}</p>
                </Col>;

            })}


          </Row>
        </Grid>
      </div>
    )
  }
}
