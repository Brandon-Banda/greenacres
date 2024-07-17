import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact.jsx';
import FAQ from './pages/faq.jsx';
import Application from './pages/Applications.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export function App() {
  return (
    <div className="app-container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/apply" element={<Application />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}