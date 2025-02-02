import { RefObject } from 'react';
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaExternalLinkAlt } from 'react-icons/fa';
import projectList from '@/items/projects';

interface ProjectsProps {
    projectRef: RefObject<HTMLDivElement | null>;
}

export default function Projects({ projectRef }: ProjectsProps) {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 20 });

    const scale = useTransform(smoothProgress, [0, 1], [0, 1]);
    const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
    const x = useTransform(scrollYProgress, [0, 1], ["55%", "-95%"]);

    return (
        <div id="projects" ref={projectRef} className="w-full h-[400vh] flex flex-col gap-[20rem]">
            <motion.div className="w-full sticky top-0 h-screen flex flex-col justify-end overflow-hidden gap-4">
                    <motion.div style={{ x }} className="relative w-[calc(3*100%)] flex gap-10 overflow-hidden flex-none">
                        {projectList.sort((a, b) => b.year - a.year).map((project, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    className="relative h-96 rounded w-[30rem] flex-none bg-[#1a1a1a] overflow-hidden flex flex-col"
                                >
                                    <div className="w-full h-[60%] overflow-hidden flex justify-center items-center">
                                        <img className="h-full" src={project.image} />
                                    </div>
                                    <div className="relative">
                                        <motion.div transition={{ type: 'tween', duration: 0.5, bounce: 0.1 }} whileInView={{ width: '0' }} className="inset w-full h-full absolute z-20 bg-[#51C4D3]"></motion.div>
                                        <h1
                                            className="text-3xl px-2 w-full inter font-light uppercase z-10 border-b-2 border-[#51C4D3] text-white"
                                        >
                                            {project.name}
                                        </h1>
                                    </div>
                                    {project.tags && 
                                        <div className="w-full flex px-2 mt-4 gap-2">
                                            {project.tags.map((tag, index) => {
                                                return (
                                                    <div key={index} style={{ backgroundColor: tag.color }} className={`text-white nunito text-xs rounded-md px-2 py-[0.125rem] font-bold`}>{tag.name}</div>
                                                )
                                            })}
                                        </div>
                                    }
                                    <div className="w-full opacity-10 px-2">
                                        <h1 className="text-7xl mt-2 inter font-extrabold italic">{project.year ?? '0000'}</h1>
                                    </div>
                                    {project.link && (
                                        <a href={project.link} target="_blank" className="absolute hover:scale-110 transition duration-100 text-lg group bottom-0 rounded right-0 p-3 origin-bottom-right bg-[#126E82] mr-4 mb-4 shadow-md flex justify-center items-center">
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </motion.div>
                            )
                        })}
                    </motion.div>
                <motion.h1 transition={{ type: 'spring', duration: 1.15, bounce: 0.22 }} whileInView={{ marginLeft: '0' }} className="text-white pl-8 text-9xl transform -ml-[100%] inter font-bold">PROJECTS</motion.h1>
            </motion.div>
        </div>
    );
}