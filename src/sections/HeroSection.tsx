'use client';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import muditImage from '@/media/mudit_img2(cyber).jpg';
import {
  SiAngular,
  SiArcgis,
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLeaflet,
  SiOpenlayers,
  SiPython,
  SiQgis,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiReact,
  SiRedis,
  SiPostgresql
} from 'react-icons/si';
import Image from 'next/image';
import { DialogComponent } from '@/components/getInTouchDialog';
import ChatbotToggle from '@/components/ChatbotToggle';
import React, { memo } from 'react';
import { cn } from '@/lib/utils';

// const skills = [
//   { text: 'HTML', Icon: SiHtml5 },
//   { text: 'JavaScript', Icon: SiJavascript },
//   { text: 'TypeScript', Icon: SiTypescript },
//   { text: 'React', Icon: SiReact },
//   { text: 'Redux', Icon: SiRedux },
//   { text: 'Python', Icon: SiPython },
//   { text: 'Tailwind CSS', Icon: SiTailwindcss },
//   { text: 'NodeJS', Icon: SiNodedotjs },
//   { text: 'ExpressJS', Icon: SiExpress },
//   { text: 'MongoDB', Icon: SiMongodb },
//   { text: 'PostgreSQL', Icon: SiPostgresql },
//   { text: 'Redis', Icon: SiRedis },
//   { text: 'Version Control', Icon: SiGit },
//   { text: 'Docker', Icon: SiDocker },
//   { text: 'Git', Icon: SiGit },
//   { text: 'Leaflet', Icon: SiLeaflet },
// ];
const skills = [
  { text: 'HTML', Icon: SiHtml5, color: '#E34F26' },
  { text: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
  { text: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { text: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { text: 'React', Icon: SiReact, color: '#61DAFB' },
  { text: 'Redux', Icon: SiRedux, color: '#764ABC' },
  { text: 'NodeJS', Icon: SiNodedotjs, color: '#339933' },
  { text: 'ExpressJS', Icon: SiExpress, color: '#000000' },
  { text: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { text: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { text: 'Redis', Icon: SiRedis, color: '#DC382D' },
  { text: 'Version Control', Icon: SiGit, color: '#F05032' },
  { text: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { text: 'Git', Icon: SiGit, color: '#F05032' },
  { text: 'Leaflet', Icon: SiLeaflet, color: '#199900' },
  { text: 'Python', Icon: SiPython, color: '#3776AB' },
];


const HeroSection = memo(function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.4,
      },
    },
  };

  // Adjust buttonVariants to remove hover effects and delay appearance
  const buttonVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1.5, // Delay the button's appearance after marquee
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const marqueeContainerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 1.2,
      },
    },
  };

  return (
    <header className="relative flex min-h-[600px] max-h-[900px] h-screen w-full flex-col items-center justify-center bg-white dark:bg-black overflow-hidden pb-16 sm:pb-20">
      {/* Grid background */}
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:20px_20px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <motion.div
        className="mx-auto max-w-full px-5 py-4 md:py-8 lg:py-4 text-left flex flex-col lg:flex-row items-center justify-between relative z-10 flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-8 order-2 lg:order-1">
          <motion.div variants={itemVariants}>
            <TypeAnimation
              className="text-2xl sm:text-3xl font-bold text-[#2b55ff] dark:text-[#4b6fff] relative z-10"
              sequence={['Hello!', 1000, 'Hola!', 1000, 'Bonjour!', 1000, 'Namaste!', 1000]}
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-2xl font-heading md:text-3xl lg:text-5xl mt-3 md:mt-5 text-center lg:text-left"
          >
            I&#39;m Mudit Garg. 👋
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="my-5 md:my-6 lg:my-8 text-base md:text-lg lg:text-xl font-normal leading-relaxed lg:leading-relaxed text-center lg:text-left max-w-2xl lg:max-w-xl"
          >
            Based in Germany, I&#39;m a Geospatial Developer and a Software Engineer. I love to work
            with maps, data, and code. I&#39;m passionate about open-source, web technologies, and
            building cool stuff.
          </motion.p>

          <div className="flex flex-col items-center lg:items-start mb-6 md:mb-8 w-full">
            <motion.div className="flex space-x-6 mb-5 md:mb-6" variants={itemVariants}>
              <motion.a
                href="https://github.com/himudit"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaGithub className="text-3xl md:text-4xl text-gray-800 dark:text-white hover:text-cerulean-400 transition-colors duration-300" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mudit-garg-03m/"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaLinkedin className="text-3xl md:text-4xl text-gray-800 dark:text-white hover:text-cerulean-400 transition-colors duration-300" />
              </motion.a>
            </motion.div>

            {/* Contact button with proper spacing for mobile */}
            {/* <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileTap="tap"
              className="relative z-10 mt-2"
            >
              <DialogComponent
                triggerButtonText="Get in Touch!"
                dialogTitle="Get in Touch"
                dialogDescription="Please fill out the form below to get in touch with me."
                inputLabels={{ name: 'Name', email: 'Email', message: 'Message' }}
                buttonClassName="h-10 text-base font-heading md:h-12 md:text-lg lg:h-14 lg:text-xl"
              />
            </motion.div> */}

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileTap="tap"
              className="relative z-10 mt-2"
            >
              <a
                href="https://drive.google.com/file/d/1KxiV0IMKVzTSPGUcBnPUxmT6Yqalqfp5/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-5 text-base font-heading md:h-12 md:text-lg lg:h-14 lg:text-xl px-6 rounded-md bg-main text-black hover:bg-main transition-all duration-300 border-black"
              >
                Resume
              </a>
            </motion.div>



            {/* Chatbot button - positioned below Get in Touch on mobile, right corner on desktop */}
            {/* <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 mt-4 lg:hidden"
            >
              <ChatbotToggle />
            </motion.div> */}
          </div>
        </div>

        <motion.div
          className="w-full lg:w-1/2 mt-2 lg:mt-0 flex justify-center lg:justify-end order-1 lg:order-2"
          variants={itemVariants}
        >
          <Image
            src={muditImage}
            alt="Mudit Garg"
            priority
            width={400}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 450px"
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[450px] h-auto rounded-xl shadow-lg"
            placeholder="blur"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full z-0"
        variants={marqueeContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <Marquee
          className="border-t-border dark:border-t-darkBorder dark:bg-secondaryBlack border-t-2 border-b-2 border-b-border dark:border-b-darkBorder bg-white py-2 sm:py-3 lg:py-5 font-base"
          direction="left"
          speed={70}
          loop={0}
          gradientWidth={50}
        >
          {' '}
          {skills.map((skill, id) => (
            <motion.div
              className="flex items-center mx-4 sm:mx-6 lg:mx-8"
              key={id}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <skill.Icon className="text-2xl sm:text-3xl lg:text-4xl mr-2 sm:mr-3" color={skill.color} />
              <span className="text-lg sm:text-xl lg:text-2xl font-heading">{skill.text}</span>
            </motion.div>
          ))}
        </Marquee>
      </motion.div>

      {/* Chatbot positioned above the marquee in bottom-right corner on desktop */}
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:block absolute bottom-20 right-4 z-10 xl:bottom-24"
      >
        <ChatbotToggle />
      </motion.div>
    </header>
  );
});

export default HeroSection;
