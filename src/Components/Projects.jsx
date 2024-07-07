import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "../Data/Data";

const Projects = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#8C03FC]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 ">
          {projects.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
        <img src={card.project_img} alt="" className="max-w-96 max-w-96" key={card.id}/>
  );
};

export default Projects;


{/* <div
        style={{
          backgroundImage: `url(${card.project_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      >
      </div> */}
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.project_name}
        </p>
      </div> */}