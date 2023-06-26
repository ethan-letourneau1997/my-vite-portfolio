//< React
import { useCallback } from "react";

//< Styles
import "./App.css";

//< Particles
import { loadFull } from "tsparticles";

//< My components
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  //> Particle effects

  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Nav />

      <Home />

      <Skills />
      <Projects />
      <About />
    </div>
  );
}

export default App;
