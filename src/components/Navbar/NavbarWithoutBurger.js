import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ isActive, navbarEnd, navbarBrand, className }) => {
  const isMenuActive = isActive ? 'is-active' : ''
  return (
    <nav className={`navbar Navbar ${className}`}>
      <div className="container">
        <div className="navbar-brand">{navbarBrand}</div>
        <div className={`navbar-menu ${isMenuActive} js-navbar-menu`}>
          <div className="navbar-end">{navbarEnd}</div>
        </div>
      </div>
    </nav>
  )
}

class NavbarContainer extends Component {
  state = {
    isActive: false,
  }

  render() {
    const { navbarEnd = null, navbarBrand = null, className = '' } = this.props
    return (
      <header>
        <Navbar
          className={className}
          isActive={this.state.isActive}
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
