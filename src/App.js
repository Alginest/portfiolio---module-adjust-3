import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
