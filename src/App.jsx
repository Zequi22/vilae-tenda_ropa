import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import FavoritesProvider from './context/FavoritesProvider.jsx'
import About from './pages/About.jsx'
import Article from './pages/Article.jsx'
import Categories from './pages/Categories.jsx'
import Category from './pages/Category.jsx'
import Contact from './pages/Contact.jsx'
import Favorites from './pages/Favorites.jsx'
import Home from './pages/Home.jsx'
import Legal from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'
import Search from './pages/Search.jsx'

export default function App() {
  return (
    <FavoritesProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categorias" element={<Categories />} />
          <Route path="categoria/:slug" element={<Category />} />
          <Route path="articulo/:slug" element={<Article />} />
          <Route path="perchero" element={<Favorites />} />
          <Route path="buscar" element={<Search />} />
          <Route path="sobre-nosotros" element={<About />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="legal/:slug" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </FavoritesProvider>
  )
}
