import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import { Grid, Col} from 'react-bootstrap';
import './HeaderHome.css';


export default class HeaderHome extends Component {
  render() {
    return (
      <div className="masthead">
        <Grid className="d-flex align-items-center h-100">
          <Col className="mx-auto text-center  ">
            <h1 className="mx-auto my-0 text-uppercase">Radim Sysel | developer</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">I'm web and frontend developer with experiences on projects running on PHP and JS technologies, like Angular, React and CMSs Drupal, Wordpress frameworks Bootstrap, ZURB Foundation and responsive designes.</h2>
            <a href="#about" className="btn btn-primary js-scroll-trigger">Get Started</a>
          </Col>
        </Grid>
      </div>
    )
  }
}
