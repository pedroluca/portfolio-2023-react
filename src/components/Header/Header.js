import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuActive(false)
  }, [location])

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
        <Link exact to="/" className="blue-title not-active">Pedro Luca</Link>
      </span>
      <div className={`menu-mobile ${isMenuActive ? 'active' : ''}`} id="menu-mobile">
        <button className="button-mobile" onClick={toggleMenu}>
          <span className="hamburguer"></span>
        </button>
        <nav>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/projetos">Projetos</NavLink>
          <NavLink to="/setup">Setup</NavLink>
          <NavLink to="/links">Meus Links</NavLink>
        </nav>
      </div>
      <span className="fix-size">
        <Link exact to="/">Pedro Luca</Link>
      </span>
    </header>
  )
}

export default Header