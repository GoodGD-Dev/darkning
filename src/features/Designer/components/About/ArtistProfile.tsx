import { Row, Col } from 'react-bootstrap'
import SocialLinks from './SocialLinks'
import './style.scss'

const ArtistProfile = () => {
  return (
    <Row className="about-main">
      <Col lg={5} className="artist-image-col">
        <div className="artist-image-container">
          <img src="/1.png" alt="Victor Mortis" className="artist-image" />
          <div className="image-frame"></div>
        </div>

        <SocialLinks />
      </Col>

      <Col lg={7} className="artist-bio-col">
        <div className="bio-section">
          <h2>Biografia</h2>
          <p>
            Nascido nas sombras de uma pequena cidade industrial, Victor Mortis
            desenvolveu desde cedo uma fascinação pelo macabro e pelo surreal.
            Sua arte explora os limites entre o pesadelo e a realidade,
            investigando os medos primordiais da humanidade e transformando-os
            em imagens perturbadoras e hipnotizantes.
          </p>

          <p>
            Com formação em Artes Visuais e especialização em técnicas de
            escultura e fotografia, Victor desenvolveu um estilo único que
            combina elementos físicos construídos meticulosamente com
            manipulação digital, criando peças que parecem existir entre
            dimensões.
          </p>

          <p>
            Seu trabalho já foi exibido em galerias dedicadas ao horror e ao
            fantástico em toda Europa e América do Norte, além de colaborações
            com produtoras de cinema independente e editoras de literatura de
            horror.
          </p>
        </div>

        <div className="philosophy-section">
          <h2>Filosofia Artística</h2>
          <blockquote>
            "O horror verdadeiro não está no monstro revelado, mas no momento de
            incerteza antes que nosso cérebro consiga processar o que os olhos
            estão vendo."
          </blockquote>

          <p>
            Minha obra busca explorar o momento exato entre o reconhecimento e a
            compreensão, onde o familiar se torna estranho e o conforto se
            transforma em desconforto. É nesse limite tênue que encontramos
            nossa vulnerabilidade mais profunda e, ironicamente, também nossa
            humanidade mais autêntica.
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default ArtistProfile
