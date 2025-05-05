import React, { useState, useEffect } from 'react'
import './style.scss'

interface ImageItem {
  id: string
  url: string
  alt?: string
  order: number
}

interface ArtGridProps {
  images: ImageItem[]
  columns?: number
  mobileColumns?: number
  gap?: number
  className?: string
}

const ArtGrid: React.FC<ArtGridProps> = ({
  images,
  columns = 4,
  mobileColumns = 2,
  gap = 16,
  className = ''
}) => {
  const [columnCount, setColumnCount] = useState(columns)
  const [sortedImages, setSortedImages] = useState<ImageItem[]>([])

  // Ordenar imagens pela ordem personalizada
  useEffect(() => {
    const sorted = [...images].sort((a, b) => a.order - b.order)
    setSortedImages(sorted)
  }, [images])

  // Responsividade
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setColumnCount(mobileColumns)
      } else if (window.innerWidth < 768) {
        setColumnCount(mobileColumns)
      } else if (window.innerWidth < 992) {
        setColumnCount(3)
      } else {
        setColumnCount(columns)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [columns, mobileColumns])

  // Divide as imagens em colunas
  const createColumns = () => {
    const cols: ImageItem[][] = Array.from({ length: columnCount }, () => [])
    sortedImages.forEach((image, index) => {
      const columnIndex = index % columnCount
      cols[columnIndex].push(image)
    })
    return cols
  }

  return (
    <div className={`art-grid-container ${className}`}>
      <div
        className="art-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
          gap: `${gap}px`
        }}
      >
        {createColumns().map((column, colIndex) => (
          <div key={`column-${colIndex}`} className="art-column">
            {column.map((image) => (
              <div
                key={image.id}
                className="art-item"
                style={{ marginBottom: `${gap}px` }}
              >
                <img
                  src={image.url}
                  alt={image.alt || 'Image'}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArtGrid
