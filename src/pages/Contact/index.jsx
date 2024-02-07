import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'

const ContactContainer = styled.section`
background-image: url(${require('../../assets/conception.jpg')});
background-repeat: no-repeat;
background-size: cover;
width: 100%;
margin: 100px;
padding: 50px;
height: 600px;
`
const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  gap: 10px;
  font-family: ${fonts.third};
  background-color: ${colors.white};
  border-radius: 18px;
  padding: 30px;
  margin-bottom: 90px;
  margin-top: 30px;
`
const Title = styled.h2`
  color: ${colors.primary};
  font-size: 29px;
  text-align: center;
`
const ContactParagraph = styled.p`
  color: ${colors.black};
  opacity: 0.6;
`

function Contact() {
  return (
    <ContactContainer>
      <ContactSection>
        <Title>Vous souhaitez me contacter ?</Title>
        <ContactParagraph>Site vitrine & refonte de site existant, maquettage & intégration front-end, améliorations en termes de performances & d'accessibilité.</ContactParagraph>
        <ContactParagraph>Je suis disponible pour des missions en France et à l'international.</ContactParagraph>
      </ContactSection>
    </ContactContainer>
  )
}

export default Contact
