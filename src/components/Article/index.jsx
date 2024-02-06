import styled, { keyframes } from 'styled-components';
import colors from '../../utils/style/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const rotateAnimation = keyframes`
  0% {
   rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`;

const ArticleWrapper = styled.article`
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 50%;
  background-color: ${colors.primary};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  animation: ${rotateAnimation} 1200ms ease-in-out infinite;
 
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: ${colors.white};
`

function Article() {
  return (
    <ArticleWrapper>
      <StyledFontAwesomeIcon icon={faLightbulb} />
    </ArticleWrapper>
  )
}

export default Article;