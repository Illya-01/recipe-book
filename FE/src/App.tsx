import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import RecipeDetail from './components/RecipeDetail'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="app-header">
          <Link to="/" className="logo">
            Recipe Book
          </Link>
        </header>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>
            &copy; 2025 Recipe Book made by{' '}
            <a href="https://github.com/Illya-01">Illia Roman</a>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
