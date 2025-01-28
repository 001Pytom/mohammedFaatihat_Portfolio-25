import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Services from "./sections/Services";

function App() {
  return (
    <div className="bg-background-body text-primary font-geist ">
      <About />
      <Projects />
      <Services />
      <Contact />
      <Navbar />
    </div>
  );
}

export default App;
