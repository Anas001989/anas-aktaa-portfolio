import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import SystemDesign from './sections/SystemDesign';
import AIAssistant from './sections/AIAssistant';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Home />
          <Skills />
          <Projects />
          <SystemDesign />
          <AIAssistant />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
