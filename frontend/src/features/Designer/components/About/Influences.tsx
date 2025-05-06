import { Row, Col } from 'react-bootstrap'
import './style.scss'

const Influences = () => {
  const influencers = [
    {
      name: 'Zdzisław Beksiński',
      description:
        'A atmosfera apocalíptica e as figuras distorcidas do mestre polonês são reflexos constantes em meu trabalho, especialmente em minhas séries que exploram paisagens oníricas.'
    },
    {
      name: 'H.R. Giger',
      description:
        'A fusão biomecânica e a estética alienígena de Giger inspiram minha exploração dos limites entre o orgânico e o mecânico, especialmente na série "Crimson Harvest".'
    },
    {
      name: 'Junji Ito',
      description:
        'O horror corporal e a transformação progressiva dos pesadelos de Ito influenciam minha abordagem narrativa e a maneira como retrato o corpo humano em situações extremas.'
    },
    {
      name: 'David Cronenberg',
      description:
        'O conceito de "Nova Carne" e as metamorfoses presentes nos filmes de Cronenberg são referências fundamentais para minha exploração do horror físico e psicológico.'
    }
  ]

  return (
    <Row className="influences-section">
      <Col xs={12}>
        <h2>Influências</h2>
      </Col>

      {influencers.map((influencer, index) => (
        <Col key={index} md={6} lg={3} className="influence-item">
          <h3>{influencer.name}</h3>
          <p>{influencer.description}</p>
        </Col>
      ))}
    </Row>
  )
}

export default Influences
