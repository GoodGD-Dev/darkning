import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.scss'

const ContactAndExhibitions = () => {
  const exhibitions = [
    {
      date: 'Out 2024',
      venue: 'Galeria Noturna',
      description: 'São Paulo, Brasil - Exposição "Abismos Internos"'
    },
    {
      date: 'Jul 2024',
      venue: 'Festival de Arte Fantástica',
      description: 'Berlim, Alemanha - Mostra "Limites da Percepção"'
    },
    {
      date: 'Mar 2024',
      venue: 'Horror Convention',
      description: 'Portland, EUA - Exibição "Entidades Primordiais"'
    }
  ]

  return (
    <Row className="contact-section">
      <Col lg={6} className="mb-4 mb-lg-0">
        <h2>Contrato & Colaborações</h2>
        <p>
          Estou aberto a colaborações em projetos envolvendo arte conceitual
          para filmes, capas de álbuns, ilustrações para literatura de horror e
          exposições temáticas.
        </p>
        <p>
          Para discussões sobre possíveis colaborações ou aquisição de obras,
          entre em contato através do formulário ou diretamente pelo e-mail:
        </p>
        <p className="contact-email">
          <i className="bi bi-envelope"></i> darkness@victormortis.art
        </p>

        <Link to="/contact" className="btn btn-outline-blood">
          Formulário de Contato
        </Link>
      </Col>

      <Col lg={6}>
        <div className="exhibitions-section">
          <h2>Exposições Recentes</h2>
          <ul className="exhibitions-list">
            {exhibitions.map((exhibition, index) => (
              <li key={index}>
                <div className="exhibition-date">{exhibition.date}</div>
                <div className="exhibition-info">
                  <h4>{exhibition.venue}</h4>
                  <p>{exhibition.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  )
}

export default ContactAndExhibitions
