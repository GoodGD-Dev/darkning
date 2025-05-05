import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="display-1">404</h1>
          <h2 className="mb-4">Página não encontrada</h2>
          <p className="lead mb-4">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/">
            <Button variant="primary">Voltar para Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
