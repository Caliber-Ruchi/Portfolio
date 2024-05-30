"use client";
import React,{useState,useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {motion,useInView} from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "REAL TIME CHAT APP",
    description: "React JS, Zustand, Firebase",
    image: "/images/project/chat_app.png",
    tag: ["All","Web"],
    gitUrl:"/",
    previewUrl:"https://ruchi-chat-app.vercel.app/",
  },
  {
    id: 2,
    title: "RAZORPAY CLONE",
    description: "HTML,Tailwind CSS,Javascript",
    image: "/images/project/RazorpayClone.png",
    tag: ["All","Web"],
    gitUrl:"https://github.com/Caliber-Ruchi/RazorPay--Clone",
    previewUrl:"https://razor-pay-clone-seven-kappa.vercel.app/",
  },
  {
    id: 3,
    title: "PORTFOLIO WEBSITE",
    description: "HTML,CSS",
    image: "/images/project/portfolio.png",
    tag: ["All","Web"],
    gitUrl:"https://github.com/Caliber-Ruchi/Portfolio-Website",
    previewUrl:"https://caliber-ruchi.github.io/Portfolio-Website/",
  },
  {
    id: 4,
    title: "RESTRO WEBSITE",
    description: "HTML, CSS, UI",
    image: "/images/project/restaurant.png",
    tag: ["All","Web"],
    gitUrl:"https://github.com/Caliber-Ruchi/Restaurant-Website",
    previewUrl:"https://caliber-ruchi.github.io/Restaurant-Website/",
  },
  {
    id: 5,
    title: "TIC TAC TOE",
    description: "C++",
    image: "/images/project/tictactoe.jpeg",
    tag: ["All"],
    gitUrl:"https://github.com/Caliber-Ruchi/Tic-Tac-Toe",
    previewUrl:"/",
  },
  
];

const ProjectSection = () => {
  const [tag,setTag]= useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});

  const handleTagChange = (newTag) =>{
    setTag(newTag)
  };
  
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    intial: {y:50,opacity: 0},
    animate: {y:0, opacity: 1},
  };
  return (
    <section id='projects'>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      My Projects
    </h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
       onClick={handleTagChange}
       name="All"
       isSelected={tag === "All"}
      />
      <ProjectTag
       onClick={handleTagChange}
       name="Web"
       isSelected={tag === "Web"}
      />
      <ProjectTag
       onClick={handleTagChange}
       name="AI & ML"
       isSelected={tag === "Mobile"}
      />
    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project,index) => (
      <motion.li 
      key = {index}
      variants={cardVariants} 
      initial="initial"
      animate={isInView?"animate":"initial"}
      transition={{duration: 0.3,delay:index*0.4}}
      >
      <ProjectCard 
      key={project.id} 
      title={project.title} 
      description={project.description} 
      imgUrl={project.image} 
      gitUrl={project.gitUrl}
      previewUrl={project.previewUrl}
      />
      </motion.li>
      ))}
      </ul>
    </section>
  )
}

export default ProjectSection
