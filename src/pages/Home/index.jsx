import styled, { keyframes } from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'
import Article from '../../components/Article'

const apparitionAnimation = keyframes`
  0% {
   opacity: 0;
  }
  50% {
   opacity: 0.5;
  }
  100% {
    opacity: 1;
  }	
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  gap: 10px;
`
const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-image: url(${require('../../assets/conception.jpg')});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  border-radius: 18px;
`

const HomeContainer = styled.div`
  color: ${colors.white};
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: ${colors.white};
  margin: 20px;
  opacity: 0.8;
  width: 45%;
  border-radius: 18px;
  padding: 10px;
`

const Title = styled.h2`
  font-size: 16px;
  color: ${colors.primary};
  font-family: ${fonts.third};
  letter-spacing: 2px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`
const Presentation = styled.p`
  color: ${colors.primary};
  letter-spacing: 1px;
  font-size: 10px;
  font-family: ${fonts.third};
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
const SecondSection = styled.section`
  color: ${colors.primary};
  font-family: ${fonts.third};
  width: 100%;
  border-radius: 18px;
  background-image: url(${require('../../assets/nik.jpg')});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    height: 600px; 
  }
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  animation: ${apparitionAnimation} 5s ease-in-out;
`
const Details = styled.p`
  color: ${colors.black};
  opacity: 0.8;
  letter-spacing: 1px;
  font-size: 14px;
  font-family: ${fonts.third};
  display: flex;
  padding-top: 0;
  padding-left: 10px;
  justify-content: flex-start;
  @media (min-width: 768px) {
    font-size: 40px;
    justify-content: center;
  }
`
const Logo = styled.h1`
  color: ${colors.primary};
  font-family: ${fonts.primary};
  font-size: 28px;
  padding-left: 10px;
  letter-spacing: 6px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`

function Home() {
  return (
    <HomeWrapper>
      <FirstSection>
        <Article />
        <HomeContainer>
          <Title>Votre projet, ma priorité</Title>
          <Presentation>Vous êtes créateur et vous rêvez qu'un site mette en lumière votre travail</Presentation>
          <Presentation>Contactez-moi !</Presentation>
        </HomeContainer>
      </FirstSection>

      <SecondSection>
        <DetailsContainer>
          <Logo>IDev</Logo> 
          <Details>Entreprise naît de la volonté de créer des sites vitrines pour des créateurs en quête de visibilité</Details>
        </DetailsContainer>
      </SecondSection>

    </HomeWrapper>
    
  )
}

export default Home