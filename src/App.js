import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Setup from './pages/Setup/Setup'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/sobre" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projetos" element={<Projects/>}/>
            <Route path="/setup" element={<Setup/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/contate-me" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  )
}

export default App
