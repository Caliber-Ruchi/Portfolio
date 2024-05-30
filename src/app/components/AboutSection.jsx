"use client"
import React, {useTransition,useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const tab_data = [
  {
    title:"Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next JS</li>
        <li>React JS</li>
        <li>C++</li>
        <li>Python</li>
        <li>Tailwind</li>
        <li>SQL</li>
        <li>Git,Github</li>
      </ul>
    )
  },
  {
    title:"Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>National Institute of Technology Srinagar</li>
        <li>E.B.S.S.S</li>
      </ul>
    )
  },
  {
    title:"Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>Finalist She Codes</li>
        <li>Flipkart Grid 5.0</li>
      </ul>
    )
  }

];

const AboutSection = () => {
  const [tab,setTab] = useState("skills");
  const [isPending ,startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition (() => {
      setTab(id);
    });
  };
  
  return (
    <section className="text-white" id='about'>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="image"
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base md:text-lg">
                Welcome to my portfolio website! I&apos;m Ruchi Khandelwal, currently a student at NIT Srinagar, pursuing a Bachelor&apos;s degree in Information Technology. 
                I am passionate about technology and have honed my skills to become a proficient full-stack web developer. My journey in the world of programming 
                and design has equipped me with a diverse set of skills, making me a versatile and creative professional.
                <br/>
                My technical skill set includes proficiency in languages such as C, C++, HTML, CSS, and JavaScript.
                I have also gained expertise in popular web development frameworks and libraries like React.js and 
                have experience in using Tailwind CSS for efficient front-end development.
                </p>
                <div className="flex flex-row justify-start mt-8">
                  <TabButton 
                  selectTab={()=> handleTabChange("skills")}
                  active={tab === "skills"} 
                  >
                    {" "}
                    Skills{" "}
                  </TabButton>
                  <TabButton 
                  selectTab={()=> handleTabChange("education")}
                  active={tab === "education"} 
                  >
                    {" "}
                    Education{" "}
                  </TabButton>
                  <TabButton 
                  selectTab={()=> handleTabChange("achievements")}
                  active={tab === "achievements"} 
                  >
                    {" "}
                    Achievements{" "}
                  </TabButton>
                </div>
                <div className="mt-8">{tab_data.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
