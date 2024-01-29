
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import About from './pages/About'
import SocialIcons from './components/Social'


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <SocialIcons/>
    </Router>
  )
}

export default App
