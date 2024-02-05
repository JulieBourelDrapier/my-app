import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'


const ArticleWrapper = styled.article`
  margin: 10px 40px;
  padding: 20px 10px;
  display: flex;
  background-color: ${colors.primary};
  align-items: center;
  opacity: 0.2;
  font-family: ${fonts.main};
  border-radius: 20px;
`

const ArticleText = styled.p`
  text-align: center;
  color: ${colors.white};
  font-size: 15px;
  font-family: ${fonts.third};
`


function Article() {
  return (
    <ArticleWrapper>
      <ArticleText>
        Cette page donne un aperçu 
        de mon parcours
      </ArticleText>
    </ArticleWrapper>
  )
}

export default Article