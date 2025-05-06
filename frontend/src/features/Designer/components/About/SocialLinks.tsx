import './style.scss'

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://instagram.com/victormortis"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <i className="bi bi-instagram"></i>
      </a>
      <a
        href="https://artstation.com/victormortis"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <i className="bi bi-palette"></i>
      </a>
      <a
        href="https://twitter.com/victormortis"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <i className="bi bi-twitter"></i>
      </a>
      <a
        href="https://youtube.com/victormortis"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <i className="bi bi-youtube"></i>
      </a>
    </div>
  )
}

export default SocialLinks
