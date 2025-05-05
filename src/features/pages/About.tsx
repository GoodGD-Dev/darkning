import ArtistProfile from '../Designer/components/About/ArtistProfile'
import Influences from '../Designer/components/About/Influences'
import Expertise from '../Designer/components/About/Expertise'
import ContactAndExhibitions from '../Designer/components/About/ContactAndExhibitions'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <div className="about-page">
      <Container className="about-content">
        <ArtistProfile />
        <Influences />
        <Expertise />
        <ContactAndExhibitions />
      </Container>
    </div>
  )
}

export default About
