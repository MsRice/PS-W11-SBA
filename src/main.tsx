import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import RecipeBookProvider from './contexts/RecipeBook/RecipeBookProvider.tsx'
import ModalProvider from './contexts/modal/ModalProvider.tsx'
import AuthenticationProvider from './contexts/auth/AuthenticationProvider.tsx'
import CategoriesProvider from './contexts/Categories/CategoriesProvider.tsx'
import RecipeProvider from './contexts/Recipe/RecipeProvider.tsx'
import FavoritesProvider from './contexts/Favorites/FavoritesProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthenticationProvider>
      <ModalProvider>
        <RecipeBookProvider>
          <CategoriesProvider>
            <RecipeProvider>
              <FavoritesProvider>
                <Router>
                  <App />
                </Router>
              </FavoritesProvider>
            </RecipeProvider>
          </CategoriesProvider>
        </RecipeBookProvider>
      </ModalProvider>
    </AuthenticationProvider>
  </StrictMode>,
)
