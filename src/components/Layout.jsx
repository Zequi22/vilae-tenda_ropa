import { Outlet } from 'react-router-dom'
import CookieNotice from './CookieNotice.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Marquee from './Marquee.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen">
      <a
        href="#contenido"
        className="btn-hard btn-hard--signal fixed left-3 top-3 z-[100] -translate-y-24 focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Marquee />
      <Header />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
      <CookieNotice />
    </div>
  )
}
