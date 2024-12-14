import About from "./components/About";
import CloudSkills from "./components/CloudSkills";
import CloudWork from "./components/CloudWork";
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
      <CloudWork />
      <About />
      <Contact />
    </div>
  );
}

export default App;
