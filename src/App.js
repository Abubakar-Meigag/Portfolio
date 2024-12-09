import About from "./components/About";
import CloudSkills from "./components/CloudSkills";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Skills />
      <CloudSkills />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
