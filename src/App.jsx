
import { useState,useEffect } from "react";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import Works from "./Components/Works";

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const showAt = windowHeight * 0.2; // 30% of the viewport height
      setShowNavbar(scrollPosition > showAt);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <h1>
      {showNavbar && <Navbar/>}
      <Hero/> 
      <Works/>
      <Contact/>
    </h1>
  )
}