import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import './style.scss'

// Interface para os itens de imagem
interface ImageItem {
  id: string
  url: string
  alt?: string
  folder: string
}

// Props do componente
interface ProjectsGridProps {
  images: ImageItem[]
  className?: string
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  images,
  className = ''
}) => {
  return (
    <div className={`image-grid-container ${className}`.trim()}>
      <Row className="image-grid">
        {images.map((image) => (
          <Col
            key={image.id}
            xs={6}
            md={4}
            lg={3}
            className="image-grid-item-wrapper"
          >
            <NavLink
              to={`/projects/${image.folder}`}
              className="image-grid-link"
            >
              <div className="image-grid-item">
                <div className="image-square">
                  <img
                    src={image.url}
                    alt={image.alt || image.folder}
                    className="image-content"
                  />
                </div>
                <div className="image-overlay">
                  <span className="folder-name">{image.folder}</span>
                </div>
              </div>
            </NavLink>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProjectsGrid
