import React, { useRef } from 'react'
import jaynew from '../assets/jaynew.jpg'
import { useInView, useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import { DragCloseDrawerExample } from './DragCloseDrawer';


const Hero = () => {
  return (
    <div className=''>
        <TextContent img={jaynew} heading="Convert." subheading="I develop website for your Business that get" >
          <ExampleContent/>
          {/* <DragCloseDrawerExample /> */}
        </TextContent>
    </div>
  )
}

const PADDING=12
const TextContent =({img, heading, subheading, children})=>{
    return (
        <div style={{paddingLeft:PADDING, paddingRight:PADDING}}>
            <div className='relative h-[150vh]'>
                <StickyImage img={img} />
                <OverLay heading={heading} subheading={subheading}/>
            </div>
            {children}
        </div>
    )
}


const StickyImage =({img})=>{
    const targetRef = useRef(null)
    const {scrollYProgress}=useScroll({
        target:targetRef,
        offset:["end end", "end start"]
    })

    const scale = useTransform(scrollYProgress,[0,1],[1,0.85])
    const opacity = useTransform(scrollYProgress,[0,1],[0.9,0])
    return (
        <motion.div
        style={{
            backgroundImage: `url(${img})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
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

const OverLay = ({heading,subheading})=>{

    const targetRef = useRef(null)
    const {scrollYProgress}=useScroll({
        target:targetRef,
        offset:["start end", "end start"]
    })

    const y=useTransform(scrollYProgress,[0,1],[250,-250])
    const opacity=useTransform(scrollYProgress,[0.25,0.5,0.75],[0,1,0])
    return (
        <motion.div style={{y,opacity}} ref={targetRef} className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white -5'>
            <p className='mb-2 text-center text-xl md:mb-4 md:text-3xl text-white/60'>{subheading}</p>
            <p className='pb-3 text-center text-4xl font-bold md:text-7xl '>
            <Typewriter
              options={{
                strings: ['Converts.', 'Sign ups.'],
                autoStart: true,
                loop: true,
              }}
            />
          </p>

        </motion.div>
    )
}


const ExampleContent = () => {
    return (
    <div className="px-4 pb-24 pt-12 flex flex-col justify-center items-center">
      
      <h2 className="text-3xl font-bold tracking-wide">
        About me
      </h2>
      <div className="max-w-4xl flex flex-col items-center">
        <p className="my-4 text-neutral-600 md:text-2xl sm:text-xl">
        I'm Sanjay, based in India. I'm good at developing visually appealing websites. 
        If you want to build a site for personal or business use, I can help. I specialize in creating simple, animated, and attractive websites tailored to your needs.
        </p>
     
      </div>
      <DragCloseDrawerExample/>
    </div>
    )
  };

export default Hero


{/* <motion.div
className="box bg-[#8C03FC] w-fit py-3 px-5 rounded-3xl"
whileHover={{ scale: 1.1 }}
transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
{/* <a className='text-white font-bold tracking-wide text-xl'>Know more</a> */}

