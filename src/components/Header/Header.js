import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      const menuMobile = document.getElementById('menu-mobile')
      const isClickInsideMenu = menuMobile.contains(event.target)
      const isClickInsideButton = event.target.closest('.button-mobile')
      if (!isClickInsideMenu && !isClickInsideButton && isMenuActive) {
        setIsMenuActive(false)
      }
    }

    document.addEventListener('click', handleClickOutsideMenu)

    return () => {
      document.removeEventListener('click', handleClickOutsideMenu)
    }
  }, [isMenuActive])

  const toggleMenu = (event) => {
    if (event.type === 'touchstart') event.preventDefault()
    setIsMenuActive((prevIsMenuActive) => !prevIsMenuActive)
  }

  return (
    <header className="header-bar">
      <span>
        <NavLink exact to="/" className="blue-title">Pedro Luca</NavLink>
      </span>
      <div className={`menu-mobile ${isMenuActive ? 'active' : ''}`} id="menu-mobile">
        <button className="button-mobile" onClick={toggleMenu}>
          <span className="hamburguer"></span>
        </button>
        <nav>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/projetos">Projetos</NavLink>
          <NavLink to="/setup">Setup</NavLink>
          <NavLink to="/contate-me">Contate-me</NavLink>
        </nav>
      </div>
      <span className="fix-size">
        <NavLink exact to="/">Pedro Luca</NavLink>
      </span>
    </header>
  )
}

export default Header