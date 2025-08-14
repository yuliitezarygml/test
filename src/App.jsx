import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Error404 from './pages/Error404';
import './App.css';

function App() {
  return (
    <>
      <Preloader />
      <BackToTop />
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-details/:id" element={<ServiceDetails />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-details/:id" element={<ProjectDetails />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team-details/:id" element={<TeamDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-details/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
