import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Location from './pages/Location'
import Order from './pages/Order'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'

export default function App() {
  return (
    <>
      <div className="nebula-bg" />
      <div className="scanline" />
      <Navbar />
      <main style={{ paddingTop: '100px', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/order" element={<Order />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
