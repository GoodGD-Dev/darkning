import { NavLink } from 'react-router-dom'
import { FC } from 'react'
import { NavbarLinkProps } from '@/shared'

const NavbarLink: FC<NavbarLinkProps> = ({ to, label, icon, end = false }) => {
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        {icon && <i className={`${icon} me-1`} />} {label}
      </NavLink>
    </li>
  )
}

export default NavbarLink
