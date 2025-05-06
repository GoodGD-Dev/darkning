import { FC } from 'react'
import './styles.scss'
import { NavbarTogglerProps } from '@/shared'

const NavbarToggler: FC<NavbarTogglerProps> = ({ targetId }) => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#${targetId}`}
      aria-controls={targetId}
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  )
}

export default NavbarToggler
