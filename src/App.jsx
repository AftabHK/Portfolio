// src/App.jsx
import './App.css';
import CenteredNavbar from './Components/CenteredNavbar';
import HomeSection from './Components/HomeSection';
import AboutMe from './Components/AboutMe'; 
import Skills from './Components/Skills';
import Projects from'./Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <CenteredNavbar />
      <HomeSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
