import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'


const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${colors.black};
  align-items: center;
  font-family: ${fonts.main};
  border-radius: 18px;
  margin: 0 auto;
`

const ErrorTitle = styled.h1`
  font0-family: ${fonts.third};
  color: ${colors.sixth};
`

const ErrorSubtitle = styled.h2`
  font-family: ${fonts.third};
  font-size: 16px;
  color: ${colors.sixth};
  text-align: center;
`

const Illustration = styled.img`
  display: block;
  text-align: center;
  margin: 20px;
  width: 70%;
  height: 50%;
  border-radius: 18px;
`
const Source = styled.figcaption`
  color: ${colors.sixth};
  font-size: 14px;
  text-align: center;
  margin: 20px;
  opacity: 0.6;
`
function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={require('../../assets/annie-spratt-solo.jpg')} />
      <ErrorSubtitle>
        La page que vous cherchez n’existe pas...
      </ErrorSubtitle>
      <Source>Photo Unsplash de Annie Spratt</Source>
    </ErrorWrapper>
  )
}

export default Error