import { useParams } from 'react-router-dom';
import accommodationInfo from '../data/projects.json';
import Gallery from '../components/gallery'
import Styled from 'styled-components';
import Error from './error';

const Section = Styled.section`
display: flex;  
flex-direction: column;
margin: 20px;
@media (min-width: 768px) {
  margin: 70px;
}
`

const AccommodationHeader = Styled.header`
display: flex;
flex-direction: column;
margin-top: 10px;

@media (min-width: 768px) {
  flex-direction: row;
  justify-content: space-between;
}
`

const AccommodationTitle = Styled.h2`
color: #FF6060; 
font-size: 18px;
margin: 0;

@media (min-width: 768px) {
  font-size: 24px;
}

@media (min-width: 1200px) {
  font-size: 36px;
}
`

const AccommodationAdress = Styled.h3`
color: #FF6060; 
font-size: 14px;
margin: 0;

@media (min-width: 768px) {
font-size: 16px;
}

@media (min-width: 1200px) {
font-size: 18px;
}
`




function Accommodation() {
const { accommodationId } = useParams();
const accommodation = accommodationInfo.find((a) => a.id === accommodationId);

if (!accommodation) return <Error />

return (
  <div>
  { !!accommodation && accommodation.id !== null &&
    <Section>
            <Gallery imgSrc={accommodation.pictures} title={accommodation.title}/>
      <AccommodationHeader>
        
        <section>
              <AccommodationTitle>{accommodation.title}</AccommodationTitle>
              <AccommodationAdress>{accommodation.location}</AccommodationAdress>
        </section>

        <section>
        </section>        
      </AccommodationHeader>
        </Section>
  }
  </div>)
}

export default Accommodation

























// import styled from 'styled-components'
// import colors from '../../utils/style/colors'
// import fonts from '../../utils/style/fonts'
// import Nina from '../../assets/NinaCarducciWebsite.png'
// import React from 'react'

// const ProjectsSection = styled.article`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-family: ${fonts.third};
// `
// const Title = styled.h2`
//   color: ${colors.primary};
// `
// const ProjectsContainer = styled.section`
//   display: flex;
//   flex-direction: column;
// `
// const Project = styled.div`
//   width: 600px;
//   height: 600px;
//   margin: 10px;
// `;

// function Projets() {
//   return (
//     <ProjectsSection>
//       <Title>Les projets sur lesquels j'ai eu l'occasion de travailler</Title>
//       <ProjectsContainer>
//         <Project image={Nina} alt="mockup du site"/>
//         <Project image={Nina} alt="mockup du site" />
//         <Project image={Nina} alt="mockup du site" />
//         <Project image={Nina} alt="mockup du site" />
//         <Project image={Nina} alt="mockup du site" />
//       </ProjectsContainer>

//     </ProjectsSection>
//   )
// }

// export default Projets
