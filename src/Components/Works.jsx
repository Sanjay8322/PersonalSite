import React, { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import { projects } from "../Data/Data"

const Works = () => {
  return (
    <div className='' name="projects">
        <Content >
          <TextContent/>
        </Content>
    </div>
  )
}

const PADDING=12
const Content =({children})=>{
    return (
        <div style={{paddingLeft:PADDING, paddingRight:PADDING}}>
            <div className='relative h-[150vh]'>
                <StickyImage/>
                <Project projectList={projects} />
            </div>
            {children}
        </div>
    )
}


const StickyImage =()=>{
    const targetRef = useRef(null)
    const {scrollYProgress}=useScroll({
        target:targetRef,
        offset:["end end", "end start"]
    })

    const scale = useTransform(scrollYProgress,[0,1],[1,0.85])
    const opacity = useTransform(scrollYProgress,[0,1],[0.1,0])
    return (
        <motion.div
        style={{
            backgroundColor: "#8C03FC",
            height: `calc(100vh - ${PADDING * 2}px)`,
            top: PADDING,
            scale
        }}
        ref={targetRef}
        className='sticky z-0 overflow-hidden rounded-3xl'
        >
          <motion.div className='absolute inset-0 bg-neutral-950/70' style={{opacity,}} />
        </motion.div>
    )
}

const Project = ({ projectList }) => {

    return (

        <motion.div 
            className="absolute inset-0 flex items-center justify-center text-white"
            style={{ padding: PADDING}}
        >           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">

                {projectList.map((project) => (
                    <motion.div 
                        key={project.id} 
                        className="flex flex-wrap justify-center items-center space-y-4 m-5 max-w-80"
                    >
                        <a href={project.link} target="_blank" >
                            <img src={project.project_img} alt="" className="w-md h-md rounded-xl" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const TextContent = () => {
    return (
    <div className="px-4 pb-24 pt-12 flex flex-col justify-center items-center">
      
      <div className="max-w-4xl flex flex-col items-center">
        <p className="my-4 text-neutral-600 md:text-2xl sm:text-xl">
            Websites are important for
            <span className='text-[#8C03FC] font-bold tracking-wide'> building your brand or business</span>. It's essential to have your visitors sign up. I can help you build a site. Above are some of the projects I have developed using React and TailwindCSS.        </p>
     
      </div>
    </div>
    )
  };

export default Works
