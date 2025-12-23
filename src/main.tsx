import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import RecipeBookProvider from './contexts/RecipeBook/RecipeBookProvider.tsx'
import ModalProvider from './contexts/modal/ModalProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <RecipeBookProvider>
        <Router>
          <App />
        </Router>
      </RecipeBookProvider>
    </ModalProvider>
  </StrictMode>,
)
