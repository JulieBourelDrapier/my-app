import React from "react";
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import fonts from '../../utils/style/fonts'

const FooterContainer = styled.footer`
  width: 100%;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
`
const FooterContent = styled.p`
  color: ${colors.black};
  font-family: ${fonts.third};
  margin: 0;
  text-align: center;
  padding: 5px;
  font-size: 12px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>@Copyright 2024 IDev</FooterContent>
      <FooterContent>JulieBourelDrapier</FooterContent>
    </FooterContainer>
  );
};

export default Footer;