import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
       <Footer />
    </div>
  );
}

export default App;