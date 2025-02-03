'use client';

import ThreeD from './sub/ThreeD';
import { useState, RefObject } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { motion } from 'framer-motion';

interface ProjectsProps {
    mainRef: RefObject<HTMLDivElement | null>;
}

export default function Main({ mainRef }: ProjectsProps) {
    const [switchClick, setSwitchClick] = useState(false);
    
    return (
        <div id="home" ref={mainRef} className="w-full flex flex-col justify-center items-center">
            <div className="mt-28 w-full h-[40rem] flex">
                <div className="h-full w-1/2 justify-center items-center flex">
                    <ThreeD switchClick={switchClick} />
                </div>
                <div className="h-full w-1/2 flex flex-col justify-center">
                    <div className="w-full h-[70%] flex flex-col">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <div>
                                    <motion.h1
                                        initial={{ y: -100, rotate: -20 }} // Starts higher and tilted
                                        animate={{
                                            y: [0, 50, 0],
                                            rotate: [0, 25, -25, 20, -20, 15, -15, 10, -10, 5, -5, 2, -2, 0], // Swings back and forth
                                            transition: {
                                                y: {
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 10,
                                                    mass: 2,
                                                },
                                                rotate: {
                                                    type: "spring",
                                                    stiffness: 50,
                                                    damping: 37,
                                                    duration: 3.5,
                                                },
                                            },
                                        }}
                                        className={`text-7xl relative active:scale-90 duration-200 transition-transform w-12 inter font-bold text-transparent hover:text-white hover:cursor-pointer ${
                                            switchClick ? "text-white" : "text-[#51C4D3]"
                                        }`}
                                        style={{
                                            WebkitTextStroke: "1px rgba(255, 255, 255, 1)",
                                            textShadow: "0 0 2px rgba(0, 0, 0, 1)",
                                        }}
                                        onClick={() => setSwitchClick(!switchClick)}
                                    >
                                        hi!
                                    </motion.h1>
                                    <div className="absolute -mt-12 ml-28 opacity-[0.05] hover:opacity-100 hover:cursor-default">
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"></div>
                                        <div className="ml-1 nunito rounded-full flex justify-center items-center h-8 px-4 text-white border-white border-2">
                                            That's a switch!
                                        </div>
                                    </div>
                                </div>
                                <motion.h1 className="text-9xl font-bold inter -ml-1 overflow-hidden">I'm <motion.span transition={{ type: 'spring', stiffness: 276, damping: 20 }} whileInView={{ marginLeft: 0 }} className="text-[#51C4D3] relative ml-36">Chris.</motion.span></motion.h1>
                            </div>
                            <div className="group w-80">
                                <button className="h-10 absolute bg-gradient-to-br to-[#126E82] from-[#51C4D3] flex items-center origin-left transition-all w-0 group-hover:w-80 overflow-hidden duration-250">
                                    <h1 className="text-white ml-4 nunito font-semibold">Get to know me! 👋 <span className="opacity-50 font-thin">(much better!)</span></h1>
                                </button>
                                <div className="h-10 gap-2 w-80 border-b-2 border-white flex items-center inter font-extralight group-hover:w-0 overflow-hidden transition-all duration-250 origin-left">
                                    <FaMagnifyingGlass className="group-hover:opacity-0" />
                                    <h1 className="text-left">Wait, why is this a search bar?</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
