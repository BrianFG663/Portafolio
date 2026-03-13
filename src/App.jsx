import './App.css'
import Home from './pages/Home'
import Clubia from './pages/Clubia'
import ObrAlquiler from './pages/ObrAlquiler'
import MabraOps from './pages/MabraOps'
import Asistencia from './pages/Asistencia'
import Karen from './pages/Karen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Clubia' element={<Clubia />} />
        <Route path='/ObrAlquiler' element={<ObrAlquiler />} />
        <Route path='/MabraOps' element={<MabraOps />} />
        <Route path='/Asistencia' element={<Asistencia />} />
        <Route path='/Karen' element={<Karen />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
