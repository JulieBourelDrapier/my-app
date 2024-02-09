import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${require('../../assets/conception.jpg')});
  background-size: cover;
  background-position: center;
  height: 300px;
  @media (min-width: 768px) {
    height: 600px; 
  }
`
const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  font-family: ${fonts.third};
  background-color: ${colors.white};
  border-radius: 18px;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 50px;
  }
`
const Title = styled.h2`
  padding: 10px;
  color: ${colors.primary};
  font-size: 20px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`
const ContactParagraph = styled.p`
  color: ${colors.black};
  opacity: 0.6;
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${colors.primary};
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`

function Contact() {
  return (
    <ContactContainer>
      <ContactSection>
        <Title> Vous souhaitez me contacter ?</Title>
        <ContactParagraph><StyledFontAwesomeIcon icon={faPhone} /> 06 78 91 23 45</ContactParagraph>
        <ContactParagraph><StyledFontAwesomeIcon icon={faEnvelope} /> idev@fausseadresse.com</ContactParagraph>
        <ContactParagraph><StyledFontAwesomeIcon icon={faLinkedin} /> En message privé via Linkedin</ContactParagraph>
      </ContactSection>
    </ContactContainer>
  )
}

export default Contact
