import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Project from "./components/projects/Project";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualification />
        <Project />
        <Contact />
      </main>
    </>
  );
}

export default App;
