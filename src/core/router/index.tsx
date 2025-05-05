import { RouteObject } from 'react-router-dom'
import Home from '@/features/pages/Home'
import NotFound from '@/features/pages/NotFound'
import Projects from '@/features/pages/Projects'
import About from '@/features/pages/About'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
