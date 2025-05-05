// Header.jsx
import { NavLink } from 'react-router-dom'
import './style.scss'

const Header = () => {
  return (
    <header className="pt-3">
      <nav className="navbar navbar-expand-lg px-5">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand me-3">
            <img src="/logo.png" alt="Logo" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  end
                >
                  <i className="bi bi-scissors me-1"></i>Art
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  <i className="bi bi-scissors me-1"></i>About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  <i className="bi bi-scissors me-1"></i>Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  <i className="bi bi-scissors me-1"></i>Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/prints"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  <i className="bi bi-scissors me-1"></i>Prints
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
