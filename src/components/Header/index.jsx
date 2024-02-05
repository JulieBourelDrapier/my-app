import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="header">
      <Link to="#">Accueil</Link> 
      <Link to="#about">Compétences</Link>
      <Link to="#projects">Projets</Link>
      <Link to="#contact">Contact</Link>
    </nav>
  )
}

export default Header