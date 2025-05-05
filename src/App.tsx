import { StoreProvider } from './core/store/provider'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Header from './shared/components/Header/Header'
import routes from './core/router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const AppRoutes = () => {
  const routeElements = useRoutes(routes)
  return routeElements
}

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
