import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import experiences from '@/items/experiences';

export default function Experiences({ experiencesRef }: { experiencesRef: React.RefObject<HTMLDivElement | null> }) {
    return (
        <div id="experiences" ref={experiencesRef} className={`w-full h-[81rem] px-8 flex justify-center items-center`}>
            <div className="w-1/2 h-full flex justify-end relative overflow-hidden">
                <div className="h-full w-2 rounded-l-full bg-gradient-to-t from-[#51C4D3] to-[#0a0a0a]"></div>
                <div className="absolute flex flex-col gap-36 overflow-hidden">
                    {experiences.filter((e, i) => !(i % 2)).map((exp, index) => {
                        return (
                            <motion.div key={index} transition={{ type: 'tween', duration: 0.7, ease: 'easeOut' }} whileInView={{ right: 0, marginRight: '0.5rem' }} className="w-72 h-36 pr-4 relative border-b-2 border-white top-0 -right-72 flex flex-col justify-end py-4 gao-2">
                                <h1 className="text-white inter text-lg font-bold">{exp.title}</h1>
                                <h1 className="text-[#51C4D3] text-sm nunito">{exp.description} <span className="text-neutral-700">({exp.from.month} {exp.from.year})</span></h1>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
            <div className="w-1/2 h-full flex overflow-hidden">
                <div className="h-full w-2 rounded-r-full bg-gradient-to-b from-[#126E82] to-[#0a0a0a]"></div>
                <div className="absolute flex flex-col gap-36 pt-36 overflow-hidden">
                    {experiences.filter((e, i) => (i % 2)).map((exp, index) => {
                        return (
                            <motion.div key={index} transition={{ type: 'tween', duration: 0.7, ease: 'easeOut' }} whileInView={{ left: 0, marginLeft: '0.5rem' }} className="w-72 h-36 pl-4 relative border-b-2 border-white top-0 -left-72 flex flex-col justify-end py-4 gao-2">
                                <h1 className="text-white inter text-lg font-bold">{exp.title}</h1>
                                <h1 className="text-[#51C4D3] text-sm nunito">{exp.description}  <span className="text-neutral-700">({exp.from.month} {exp.from.year})</span></h1>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}