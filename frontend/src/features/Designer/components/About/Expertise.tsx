import { Row, Col } from 'react-bootstrap'
import './style.scss'

const Expertise = () => {
  const skills = [
    { name: 'Escultura Macabra', level: 95 },
    { name: 'Fotografia de Horror', level: 90 },
    { name: 'Manipulação Digital', level: 85 },
    { name: 'Ilustração Conceitual', level: 80 },
    { name: 'Cenografia', level: 75 }
  ]

  return (
    <Row className="expertise-section">
      <Col xs={12}>
        <h2>Técnicas & Especialidades</h2>
        <div className="expertise-grid">
          {skills.map((skill, index) => (
            <div key={index} className="expertise-item">
              <h3>{skill.name}</h3>
              <div
                className="expertise-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  )
}

export default Expertise
