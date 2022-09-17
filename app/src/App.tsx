import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Application from './pages/Application';
import Footer from './components/Footer';

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
