import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/skills">Compétences</Link>
      <Link to="/animations">Animations</Link>
    </nav>
  )
}

export default Header