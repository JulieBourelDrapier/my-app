import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'


const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FirstSection = styled.section`
background-image: url(${require('../../assets/idea.jpg')});
background-repeat: no-repeat;
background-position: top right;
background-size: 100%;
`

const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${colors.white};
  padding: 60px 90px;
  display: flex;
  text-align: center;
  flex-direction: column;
  min-width: 300px;
  border-radius: 300px;	
  border: 5px solid ${colors.primary};
`

const Title = styled.h2`
  color: ${colors.primary};
  font-size: 30px;
  font-family: ${fonts.third};
  letter-spacing: 2px;
`
const HomePresentation = styled.div`
  color: ${colors.primary};
  opacity: 0.7;	
  font-size: 20px;
  font-family: ${fonts.third};
`
const SecondSection = styled.section`
  color: ${colors.primary};
  opacity: 0.7;	
  font-size: 20px;
  font-family: ${fonts.third};
`

const Presentation = styled.p`
  color: ${colors.primary};
  opacity: 0.7;
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  font-family: ${fonts.third};
`

function Home() {
  return (
    <HomeWrapper>
      <FirstSection>
        <HomeContainer>
          <Title>Votre projet, notre priorité</Title>
          <HomePresentation>Vous êtes créateur ou à l'iniative d'une micro-entreprise et vous êtes en quête de visibilité ?</HomePresentation>
          <HomePresentation>Contactez-nous</HomePresentation>
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