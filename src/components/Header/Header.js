import React, { useState, useEffect } from 'react'
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
    <div className="header-bar">
      <span>
        <a href="/" className="blue-title">Pedro Luca</a>
      </span>
      <div className={`menu-mobile ${isMenuActive ? 'active' : ''}`} id="menu-mobile">
        <button className="button-mobile" onClick={toggleMenu}>
          <span className="hamburguer"></span>
        </button>
        <nav>
          <a href="/about">Sobre</a>
          <a href="/projects">Projetos</a>
          <a href="/setup">Setup</a>
          <a href="/contact">Contate-me</a>
        </nav>
      </div>
      <span className="fix-size">
        <a href="/">Pedro Luca</a>
      </span>
    </div>
  )
}

export default Header