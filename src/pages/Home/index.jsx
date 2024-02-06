import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'
import Article from '../../components/Article'


const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
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
    font-size: 20px;
  }
`
const HomePresentation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SecondSection = styled.section`
  color: ${colors.primary};
  font-family: ${fonts.third};
`

const Presentation = styled.p`
  color: ${colors.primary};
  letter-spacing: 1px;
  font-size: 10px;
  font-family: ${fonts.third};
  @media (min-width: 768px) {
    font-size: 14px;
  }
`

function Home() {
  return (
    <HomeWrapper>
      <FirstSection>
        <Article />
        <HomeContainer>
          <Title>Votre projet, notre priorité</Title>
          <Presentation>Vous êtes créateur ou à l'iniative d'une micro-entreprise et vous êtes en quête de visibilité ?</Presentation>
          <Presentation>Contactez-nous</Presentation>
        </HomeContainer>
      </FirstSection>

      <SecondSection>
        <HomePresentation>
        <Presentation>Front&Dev est nait de la volonté de créer des sites vitrine pour des créateurs en quête de visibilité</Presentation>
        </HomePresentation>
      </SecondSection>

    </HomeWrapper>
    
  )
}

export default Home