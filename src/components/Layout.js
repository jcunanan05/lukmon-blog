import React from 'react'
import Navbar from '../components/Navbar'
import NavbarItem from '../components/Navbar/NavbarItem'
import Footer from '../components/Footer'
import 'bulma/css/bulma.css'
import './Layout.css'

const Layout = ({ children, className = '' }) => {
  return (
    <div className={`Layout ${className}`}>
      <Navbar
        navbarBrand={
          <NavbarItem text={<h1 className="title is-5">Lukmon</h1>} />
        }
        navbarEnd={<NavbarItem text="Login" />}
        className="theme--Primary"
      />
      <main>{children}</main>
      <Footer>Copyright &copy; 2019. All Rights Reserved.</Footer>
    </div>
  )
}

export default Layout
