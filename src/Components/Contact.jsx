
import React, { useRef } from 'react'
import jaynew from '../assets/jaynew.jpg'
import { useInView, useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import { DragCloseDrawerExample } from './DragCloseDrawer';
import SquishyCard from './SquishyCard';


const Contact = () => {

    
  return (
    <div className=''>
        <TextContent />
    </div>
  )
}

const PADDING=12
const TextContent =({children})=>{
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4f0af892-cafe-4e2a-b7c5-24eaebf84b76");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Submitted Successfully");
          console.log("Form Submitted Successfully");
          event.target.reset();
          openForm();
        } else {
          console.log("Error", data);
          setResult(data.message);
          console.log(data.message);
        }
    };

    return (
        <div style={{paddingLeft:PADDING, paddingRight:PADDING}}>
            <div className='relative h-[100vh]'>
                <StickyImage />
                {/* <OverLay/> */}
                <SquishyCard onSubmit={onSubmit} />
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
    const opacity = useTransform(scrollYProgress,[0,1],[0,0])
    return (
        <motion.div
        style={{
           backgroundColor:"#8C03FC",
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


export default Contact
