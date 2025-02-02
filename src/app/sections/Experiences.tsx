import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Experiences({ experiencesRef }: { experiencesRef: React.RefObject<HTMLDivElement | null> }) {
    return (
        <div id="experiences" ref={experiencesRef} className="w-full h-[54rem] px-8 flex justify-center items-center">
            <div className="w-1/2 h-full flex justify-end relative overflow-hidden">
                <div className="h-full w-2 rounded-l-full bg-gradient-to-t from-[#51C4D3] to-[#0a0a0a]"></div>
                <div className="absolute flex flex-col gap-36 overflow-hidden">
                    <motion.div transition={{ type: 'tween', duration: 0.7 }} whileInView={{ right: 0 }} className="w-72 h-36 relative border-b-2 border-white top-0 -right-72"></motion.div>
                    <motion.div transition={{ type: 'tween', duration: 0.7 }} whileInView={{ right: 0 }} className="w-72 h-36 relative border-b-2 border-white top-0 -right-72"></motion.div>
                    <motion.div transition={{ type: 'tween', duration: 0.7 }} whileInView={{ right: 0 }} className="w-72 h-36 relative border-b-2 border-white top-0 -right-72"></motion.div>
                </div>
            </div>
            <div className="w-1/2 h-full flex overflow-hidden">
                <div className="h-full w-2 rounded-r-full bg-gradient-to-b from-[#126E82] to-[#0a0a0a]"></div>
                <div className="absolute flex flex-col gap-36 pt-36 overflow-hidden">
                    <motion.div transition={{ type: 'tween', duration: 0.7 }} whileInView={{ left: 0 }} className="w-72 h-36 relative border-b-2 border-white top-0 -left-72"></motion.div>
                    <motion.div transition={{ type: 'tween', duration: 0.7 }} whileInView={{ left: 0 }} className="w-72 h-36 relative border-b-2 border-white top-0 -left-72"></motion.div>
                    <motion.div transition={{ type: 'tween', duration: 0.7 }} whileInView={{ left: 0 }} className="w-72 h-36 relative border-b-2 border-white top-0 -left-72"></motion.div>
                </div>
            </div>
        </div>
    );
}