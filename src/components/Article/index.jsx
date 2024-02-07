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
  margin: 20px;
  border-radius: 50%;
  background-color: ${colors.black};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  animation: ${rotateAnimation} 1200ms ease-in-out infinite;
  animation-iteration-count: 2;
  animation-delay: 0.5s;
  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
 
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 38px;
  color: ${colors.third};
  @media (min-width: 768px) {
    font-size: 44px;
  }
`

function Article() {
  return (
    <ArticleWrapper>
      <StyledFontAwesomeIcon icon={faLightbulb} />
    </ArticleWrapper>
  )
}

export default Article;