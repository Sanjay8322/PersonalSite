

import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import Projects from "./Components/Projects";
import Works from "./Components/Works";

export default function App() {
  return (
    <h1>
      {/* <Navbar/> */}
      <Hero/>
      {/* <Projects /> */}
      <Works/>
      <Contact/>
    </h1>
  )
}