import React from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const HeaderWrapper = styled.div` 
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
`
const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
  width: 80%;
  @media (min-width: 768px) {
    width: 50%;
  }
`
const MainTitle = styled.h1`
  color: ${colors.primary};
  font-family: ${fonts.primary};
  font-size: 26px;
  letter-spacing: 2px;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${colors.sixth};
  font-size: 24px;
  @media (min-width: 768px) {
    font-size: 30px; 
  }
`

const StyledLink = styled(Link)`
  color: ${colors.white};
  font-family: ${fonts.third};
  font-size: 16px;
  text-decoration: none;
  padding: 10px;
  @media (min-width: 768px) {
    font-size: 30px; 
  }
  &:hover {
    color: ${colors.third};
    font-size: 16px;
    font-weight: bold;
    opacity: 1;
    @media (min-width: 768px) {
      font-size: 30px;
    }
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <NavContainer>
        <MainTitle>IDev</MainTitle>
        <StyledFontAwesomeIcon icon={faBars} />
      </NavContainer>
      <Menu>
        <StyledLink id="home" className="menu-item" to="/">Accueil</StyledLink>
        <StyledLink id="about" className="menu-item" to="/skills">À propos</StyledLink>
        <StyledLink id="project" className="menu-item" to="/projets">Projets</StyledLink>
        <StyledLink id="contact" className="menu-item" to="/contact">Contact</StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;