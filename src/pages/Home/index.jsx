import styled from 'styled-components'
import colors from '../../utils/style/colors'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${colors.background};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`
const Title = styled.h1`
  color: ${colors.primary};
`

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
      <Title>Page d'accueil</Title>
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home