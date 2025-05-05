import React from 'react'
import { Container } from 'react-bootstrap'
import ArtGrid from '../Designer/components/ArtGrid'

const Home: React.FC = () => {
  // Dados de imagens para a galeria com campo order para ordenação personalizada
  const imagens = [
    {
      id: '1',
      url: '/1.png',
      alt: 'Imagem 1',
      order: 5
    },
    {
      id: '2',
      url: '/2.png',
      alt: 'Imagem 2',
      order: 3
    },
    {
      id: '3',
      url: '/3.png',
      alt: 'Imagem 3',
      order: 8
    },
    {
      id: '4',
      url: '/4.png',
      alt: 'Imagem 4',
      order: 2
    },
    {
      id: '5',
      url: '/5.png',
      alt: 'Imagem 5',
      order: 10
    },
    {
      id: '6',
      url: '/6.png',
      alt: 'Imagem 6',
      order: 12
    },
    {
      id: '7',
      url: '/7.png',
      alt: 'Imagem 7',
      order: 7
    },
    {
      id: '8',
      url: '/8.png',
      alt: 'Imagem 8',
      order: 4
    },
    {
      id: '9',
      url: '/9.png',
      alt: 'Imagem 9',
      order: 9
    },
    {
      id: '10',
      url: '/10.png',
      alt: 'Imagem 10',
      order: 6
    },
    {
      id: '11',
      url: '/11.png',
      alt: 'Imagem 11',
      order: 1
    },
    {
      id: '12',
      url: '/12.png',
      alt: 'Imagem 12',
      order: 11
    }
  ]

  return (
    <Container fluid className="py-5 px-2 px-sm-3 px-md-4 px-lg-5">
      <ArtGrid images={imagens} columns={4} mobileColumns={2} gap={16} />
    </Container>
  )
}

export default Home
