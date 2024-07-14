import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export const Navbar = () => {
  return (
    <div className="sticky z-50 top-0 left-0">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1  text-white"
    >
      <Link to="home" smooth={true} offset={-50}><Tab setPosition={setPosition}>Home</Tab></Link>
      <Link to="about" smooth={true} offset={-100}><Tab setPosition={setPosition}>About</Tab></Link>
      <Link to="projects" smooth={true} offset={200}><Tab setPosition={setPosition}>Projects</Tab></Link>
      <Tab setPosition={setPosition}>Blogs</Tab>
      <Link to="contact" smooth={true}><Tab setPosition={setPosition}>Contact</Tab></Link>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};