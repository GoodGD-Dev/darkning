import { BrowserRouter } from 'react-router-dom'
import { AppRoutes, StoreProvider } from '@core'
import { MainLayout } from '@shared'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <MainLayout>
          <main>
            <AppRoutes />
          </main>
        </MainLayout>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
