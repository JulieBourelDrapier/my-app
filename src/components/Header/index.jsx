import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'

const HeaderWrapper = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 40px;
`
const MainTitle = styled.h1`
  color: ${colors.primary};
  font-family: ${fonts.primary};
  font-size: 40px;
  letter-spacing: 2px;
  margin: 0;
`
const LinksContainer = styled.nav`
  display: flex;
`

const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-family: ${fonts.third};
  letter-spacing: 1px;
  margin: 0 10px;
  padding: 16px 2px;
  text-decoration: none;
  font-size: 15px;
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