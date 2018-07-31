import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'


const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

export default class CustomNavbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scrollPositionY: 0,
    }
  }

  componentDidMount() {
    // 32 is the number of milliseconds to debounce
    // I picked this because it's approx 2 frames (ie: 16.7 * 2)
    return window.addEventListener('scroll', debounce(this.handleScroll, 32))
  }

  componentWillUnmount() {
    return window.removeEventListener('scroll', debounce(this.handleScroll, 32))
  }

  handleScroll = () => {
    // + is unary operator, same as Number(scrollPositionY)
    const scrollPositionY = +window.scrollY
    return this.setState({ scrollPositionY })
  }

  render() {
    const isScrolling = !!this.state.scrollPositionY
    return (
      <Navbar default collapseOnSelect fixedTop className={(isScrolling) ? 'nav isScrolling' : 'nav'}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Radim Sysel</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/" active={window.location === '/'}>
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about" active={window.location === '/about'}>
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news" active={window.location === '/news'}>
              News
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
