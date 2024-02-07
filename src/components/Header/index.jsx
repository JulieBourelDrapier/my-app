import React from 'react';
import { fallDown as MenuBurger } from 'react-burger-menu';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


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

const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-family: ${fonts.primary};
  font-size: 40px;
  }
`


const Header = () => {
  return (
    <div>
    <HeaderWrapper>
      <MainTitle>IDev</MainTitle>
      <StyledLink to="/"><FontAwesomeIcon icon={faBars} /></StyledLink>
    </HeaderWrapper>
    <MenuBurger>
      <StyledLink id="home" className="menu-item" to="/">Accueil</StyledLink>
      <StyledLink id="about" className="menu-item" to="/skills">À propos</StyledLink>
      <StyledLink id="project" className="menu-item" to="/projets">Projets</StyledLink>
      <StyledLink id="contact" className="menu-item" to="/contact">Contact</StyledLink>
    </MenuBurger>
    </div>
  );
};

export default Header;