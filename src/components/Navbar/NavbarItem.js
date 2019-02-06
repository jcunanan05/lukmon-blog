import React from 'react'

const NavbarItem = ({ text, href }) => {
  return (
    <a href={href} className="navbar-item NavbarItem">
      {text}
    </a>
  )
}

export default NavbarItem
