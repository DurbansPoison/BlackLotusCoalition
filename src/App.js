/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Designers from './pages/designers';
import Gallery from './pages/gallery';
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
