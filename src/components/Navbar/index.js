import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Burger from './Burger'
import './Navbar.css'

const Navbar = ({
  isActive,
  onBurgerClick,
  navbarEnd,
  navbarBrand,
  className,
}) => {
  const isMenuActive = isActive ? 'is-active' : ''
  return (
    <nav className={`navbar Navbar ${className}`}>
      <div className="container">
        <div className="navbar-brand">
          {navbarBrand}
          <Burger isActive={isActive} onBurgerClick={onBurgerClick} />
        </div>
        <div className={`navbar-menu ${isMenuActive} js-navbar-menu`}>
          <div className="navbar-end">{navbarEnd}</div>
        </div>
      </div>
    </nav>
  )
}

/**
 * Navbar Container
 * @param {object} navbarBrand - react component for navbar brand
 * @param {object} navbarEnd - react component for navbar menu right
 * @param {string} className - additional CSS
 */

class NavbarContainer extends Component {
  state = {
    isActive: false,
  }

  componentDidMount = () => {
    this.closeMenu()
  }

  closeMenu = () => {
    /* eslint-disable no-undef */
    // close the menu when something's clicked
    const navbarMenu = document.querySelector('.js-navbar-menu')
    navbarMenu.addEventListener('click', event => {
      if (event.target.classList.contains('navbar-item') === true)
        this.setState(() => ({ isActive: false }))
    })
  }

  handleOnBurgerClick = event => {
    // disable the default event
    event.preventDefault()
    this.toggleIsActive()
  }

  toggleIsActive = () => {
    // update the state
    this.setState(currentState => {
      return {
        isActive: !currentState.isActive,
      }
    })
  }

  render() {
    const { navbarEnd = null, navbarBrand = null, className = '' } = this.props
    return (
      <header>
        <Navbar
          className={className}
          isActive={this.state.isActive}
          onBurgerClick={this.handleOnBurgerClick}
          navbarEnd={navbarEnd}
          navbarBrand={navbarBrand}
        />
      </header>
    )
  }
}

NavbarContainer.propTypes = {
  navbarEnd: PropTypes.object,
  navbarBrand: PropTypes.object,
  className: PropTypes.string,
}

export default NavbarContainer
