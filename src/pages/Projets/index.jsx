
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Title = styled.h1`
  color: ${colors.primary};
`
const Subtitle = styled.h2`
  color: ${colors.secondary}; 
`
function Projets() {
  return (
    <div>
      <Title>Projets</Title>
      <Subtitle>Blabla</Subtitle>
    </div>
  )
}

export default Projets