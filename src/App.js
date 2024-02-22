import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Setup from './pages/Setup/Setup'
import MyLinks from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import NotFound from './pages/NotFound/NotFound'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/links" element={<MyLinks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <Analytics />
    </div>
  )
}

export default App
