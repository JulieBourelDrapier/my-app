import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'


const HeaderWrapper = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 40px auto;
`
const MainTitle = styled.h1`
  color: ${colors.primary};
  font-family: ${fonts.primary};
  font-size: 20px;
  letter-spacing: 2px;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`
const LinksContainer = styled.nav`
  display: flex;
`

const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-family: ${fonts.third};
  
  padding: 10px;
  font-size: 12px;
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 15px; 
  }
`
function Header() {
  return (
    <HeaderWrapper>
    <MainTitle>Front&Dev</MainTitle>
    <LinksContainer>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/skills">À propos</StyledLink>
      <StyledLink to="/projets">Projets</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </LinksContainer>
    </HeaderWrapper>
  )
}


export default Header