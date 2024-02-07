import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'

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
