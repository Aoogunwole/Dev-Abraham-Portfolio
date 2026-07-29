import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { HiDocumentText, HiArrowTopRightOnSquare } from "react-icons/hi2";

import { styles } from "../styles";
import { services, resumeLink } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a frontend developer with experience building modern, responsive web applications using React, Next.js, TypeScript, and JavaScript. I've worked on enterprise dashboards, e-commerce platforms, and customer-facing products, collaborating with cross-functional teams to deliver scalable solutions, solve technical challenges, and create seamless user experiences.
      </motion.p>

      <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)} className='mt-8'>
        <a
          href={resumeLink}
          target='_blank'
          rel='noopener noreferrer'
          className='green-pink-gradient p-[1px] rounded-xl inline-block group'
        >
          <span className='bg-tertiary rounded-xl px-6 py-3 flex items-center gap-3 text-white font-semibold text-[15px] transition-colors duration-300 group-hover:bg-black-100'>
            <span className='w-9 h-9 rounded-lg bg-[#915EFF]/20 text-[#915EFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
              <HiDocumentText className='w-5 h-5' />
            </span>
            View Resume
            <HiArrowTopRightOnSquare className='w-4 h-4 text-secondary group-hover:text-[#915EFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300' />
          </span>
        </a>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
