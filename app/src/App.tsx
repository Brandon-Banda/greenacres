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

export function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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
