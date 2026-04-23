import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[70px] z-0 pointer-events-none hidden sm:block">
        <EarthCanvas variant="hero" />
      </div>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#0077b6]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#0077b6]">Ruthik</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop full stack web applications, <br className="sm:block hidden"/>and mobile applications</p> 
          <a href="/resume.pdf" download="Ruthik-M-U-Resume.pdf" className='mt-6 inline-block'>
            <button className="absolute top-60 left-30 px-4 py-2 bg-[#0077b6] text-white rounded-md z-20">Download CV</button>
          </a>
          <a href="#contact">
            <button className="absolute top-80 left-30 px-4 py-2 bg-[#0077b6] text-white rounded-md z-20">Contact Me</button>
          </a>     
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} className="w-3 h-3 rounded-full bg-secondary mb-1"/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
