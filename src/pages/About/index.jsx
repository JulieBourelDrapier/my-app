import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'


const ProfilContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.sixth};
  padding: 20px;
`

const Title = styled.h2`
  text-align: center;
  color: ${colors.black};
  border-radius: 23px;
  padding: 0;
  font-family: ${fonts.fourth};
  letter-spacing: 6px;
  font-size: 26px;
  width: 80%;

`
const Profil = styled.article`
  display: flex;
  height: 200px;
  width: 200px;
  background-image: url(${require('../../assets/moi.png')});
  background-size: cover;
  height: 200px;
`

const ProfilContent = styled.p`
  color: ${colors.black};
  font-family: ${fonts.fourth};
  text-align: center;
  width: 80%;
  font-size: 18px;
  margin: 10px 0;
  opacity: 0.7;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`
function About() {
  return (
    <ProfilContainer>
      <Title>"Choisis un travail que tu aimes, tu n'auras pas à travailler un seul jour de ta vie."</Title>
      <Profil></Profil>
      <Title>Hello, moi c'est Julie !</Title>
      <ProfilContent>
        Je suis développeuse web front-end. Passionnée par la création de contenu et sensibilisée à l'UX/UI design.
        Fonceuse et créative, je saurais mettre me compétences au service de votre projet pour lui permettre de voir le jour.
        Je travaille seule tout en m'appuyant sur la communauté de développeur pour rester en veille et rester au plus près des évolutions tech.
      </ProfilContent>
      <Title>Hi, I'm Julie !</Title>
      <ProfilContent>
        I am a front-end developper. I am passionate about content creation and fond of UX/UI design.
        Enthusiast and creative, I will use my ressources to give shape to your project and make it happen.
        I work alone and I rely on my peers to stay up to date and stay ahead of the tech evolution.
      </ProfilContent>
    </ProfilContainer>
  )
}

export default About