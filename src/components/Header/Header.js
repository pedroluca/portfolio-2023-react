import './Header.css'

function Header() {
  return (
    <div className="header-bar">
      <span>
        <a href="/" className="blue-title">Pedro Luca</a>
      </span>
      <nav>
        <a href="/about">Sobre</a>
        <a href="/projects">Projetos</a>
        <a href="/setup">Setup</a>
        <a href="/contact">Contate-me</a>
      </nav>
      <span className="fix-size">
        <a href="/">Pedro Luca</a>
      </span>
    </div>
  )
}

export default Header