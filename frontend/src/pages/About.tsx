import ArtistProfile from '@features/Designer/components/About/ArtistProfile'
import Influences from '@features/Designer/components/About/Influences'
import Expertise from '@features/Designer/components/About/Expertise'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <div className="about-page">
      <Container className="about-content">
        <ArtistProfile />
        <Influences />
        <Expertise />
      </Container>
    </div>
  )
}

export default About
