import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'

const Title = styled.h1`
  color: ${colors.primary};
`
const Subtitle = styled.h2`
  color: ${colors.secondary};
`

function Contact() {
  return (
    <div>
      <Title>Vous souhaitez me contacter ?</Title>
      <Subtitle>Plusieurs options s'offrent à vous</Subtitle>
    </div>
  )
}

export default Contact