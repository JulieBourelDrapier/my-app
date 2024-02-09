import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'


const ProjectsSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.third};
  background-color: ${colors.white};
  border-radius: 18px;
  padding: 70px;
`
const MainTitle = styled.h1`
  padding: 0;
  color: ${colors.black};
  opacity: 0.7;
  padding: 0;
  margin-top: 10px;
  font-family: ${fonts.third};	
  width: 70%;
  text-align: center;
  font-size: 18px;
  @media (min-width: 768px) {
    width: 90%;
    font-size: 40px;
    margin-top: 30px;
  }
`
const Title = styled.h2`
  padding: 0;
  color: ${colors.sixth};
  opacity: 0.7;
  font-family: ${fonts.fourth};	
  width: 70%;
  text-align: center;
  font-size: 14px;
  @media (min-width: 768px) {
    width: 90%;
    font-size: 28px;
  }
`
const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  width: 80%;
  padding-bottom: 120px;
`
const Project = styled.img`
  width: 300px;
  height: auto;
  margin: 10px;
  border: 3px solid ${colors.sixth};
  border-radius: 10px;
`;

function Projets() {
  return (
    <ProjectsSection>
      <MainTitle>Projets professionnalisants</MainTitle>
      <Title>Stack : React / Redux / JavaScript  </Title>
      <ProjectsContainer>
        <Project src={require('../../assets/mockup-JB.png')}/>
        <Project src={require('../../assets/mockup-NC.png')}/>
        <Project src={require('../../assets/mockup-Ohmyfood.png')}/>
        <Project src={require('../../assets/mockup-SB.png')} />
        <Project src={require('../../assets/mockup-Kasa.png')} />
        <Project src={require('../../assets/mockup-Idev.png')} />
        <Project src={require('../../assets/mockup-Ridingcities.png')} />
        <Project src={require('../../assets/mockup-Argentbank.png')} />
      </ProjectsContainer>

    </ProjectsSection>
  )
}

export default Projets
