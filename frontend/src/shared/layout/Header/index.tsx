import { NavLink } from 'react-router-dom'
import './styles.scss'
import { NavbarToggler } from '@/shared'
import { NavbarLink } from '@/shared'

const Header = () => {
  return (
    <header className="pt-3">
      <nav className="navbar navbar-expand-lg px-5">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand me-3">
            <img src="/logo.png" alt="Logo" />
          </NavLink>

          <NavbarToggler targetId={'navbarNav'} />

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-3">
              <NavbarLink to="/" label="Art" icon="bi bi-scissors" end />
              <NavbarLink to="/about" label="About" icon="bi bi-scissors" />
              <NavbarLink
                to="/projects"
                label="Projects"
                icon="bi bi-scissors"
              />
              <NavbarLink to="/contact" label="Contact" icon="bi bi-scissors" />
              <NavbarLink to="/prints" label="Prints" icon="bi bi-scissors" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
