import { RouteObject } from 'react-router-dom'
import { About, Contact, Home, NotFound, Project } from '@pages'

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/project', element: <Project /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> }
]

export default routes
