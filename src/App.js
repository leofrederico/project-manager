import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
      
import Home from './components/pages/Home.js' 
import Company from './components/pages/Company.js'
import Contact from './components/pages/Contact.js'
import NewProject from './components/pages/NewProjet.js'

import Container from './components/layout/Container.js'

function App() {
  return (
    <Router>

      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/newproject">New Project</Link>
      </div>

      <Container custonClass="min-height">
          <Routes>
              <Route path="/" element={<Home/>} />

              <Route path="/company" element={<Company/>} />

              <Route path="/contact" element={<Contact/>} />

              <Route path="/newproject" element={<NewProject/>} />
          </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App;