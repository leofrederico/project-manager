import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
      
import Home from './components/pages/Home.js' 
import Company from './components/pages/Company.js'
import Contact from './components/pages/Contact.js'
import NewProject from './components/pages/NewProjet.js'
import Projects from './components/pages/Projects.js'

import Container from './components/layout/Container.js'
import Navbar from './components/layout/Navbar.js'
import Footer from './components/layout/Footer.js'

function App() {
  return (
    <Router>

      <Navbar />

      <Container custonClass="min-height">
          <Routes>
              <Route path="/" element={<Home/>} />

              <Route path="/company" element={<Company/>} />

              <Route path="/projects" element={<Projects/>} />

              <Route path="/contact" element={<Contact/>} />

              <Route path="/newproject" element={<NewProject/>} />
          </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;