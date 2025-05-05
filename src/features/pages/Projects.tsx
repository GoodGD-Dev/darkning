import React from 'react'
import { Container } from 'react-bootstrap'
import ProjectsGrid from '../Designer/components/ProjectsGrid'

const Projects: React.FC = () => {
  // Dados de exemplo para as imagens
  const portfolioImages = [
    {
      id: '1',
      url: '/1.png',
      alt: 'Projeto 1',
      folder: 'projeto1'
    },
    {
      id: '2',
      url: '/2.png',
      alt: 'Projeto 2',
      folder: 'projeto2'
    },
    {
      id: '3',
      url: '/3.png',
      alt: 'Projeto 3',
      folder: 'projeto3'
    },
    {
      id: '4',
      url: '/4.png',
      alt: 'Projeto 4',
      folder: 'projeto4'
    },
    {
      id: '5',
      url: '/5.png',
      alt: 'Projeto 5',
      folder: 'projeto5'
    },
    {
      id: '6',
      url: '/6.png',
      alt: 'Projeto 6',
      folder: 'projeto6'
    },
    {
      id: '7',
      url: '/7.png',
      alt: 'Projeto 7',
      folder: 'projeto7'
    },
    {
      id: '8',
      url: '/8.png',
      alt: 'Projeto 8',
      folder: 'projeto8'
    }
  ]

  return (
    <Container>
      <ProjectsGrid images={portfolioImages} />
    </Container>
  )
}

export default Projects
