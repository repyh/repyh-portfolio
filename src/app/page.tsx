'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import { useIntersection } from '@/hooks/useIntersection';

import Header from './sections/Header';
import Main from './sections/Main';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';
import LoadingSection from './sections/Loading';

export default function Home() {
    const [topMessage, setTopMessage] = useState<string>('Welcome');
    const [section, setSection] = useState<string>('home');
    const [loading, setLoading] = useState<boolean>(true);

    const mainRef = useRef<HTMLDivElement | null>(null);
    const mainIntersect = useIntersection(mainRef, '0px');

    const experiencesRef = useRef<HTMLDivElement | null>(null);
    const experiencesIntersect = useIntersection(experiencesRef, '0px');

    const projectRef = useRef<HTMLDivElement | null>(null);
    const projectIntersect = useIntersection(projectRef, '0px');

    useEffect(() => {
        setLoading(false);
    }, [])

    useEffect(() => {
        if(projectIntersect) {
            setTopMessage('Projects');
            setSection('projects');
        }
        if(experiencesIntersect) {
            setTopMessage('Exps');
            setSection('experiences');
            console.log('NOOOOOOOO')
        }
        if(mainIntersect) {
            setTopMessage('Welcome');
            setSection('home');
        }
    }, [projectIntersect, mainIntersect, experiencesIntersect]);

    return (
        <div className="w-full flex item -center justify-center scroll-smooth">
            {/* <div className="w-[0.8%] min-h-screen bg-gradient-to-b from-[#51C4D3] to-[#D36051]"></div> */}
            {loading ? <LoadingSection /> : (
                <div className="w-[100%] flex flex-col gap-36">
                    <Header topMessage={topMessage} section={section} />
                    <Main mainRef={mainRef} />
                    <Experiences experiencesRef={experiencesRef} />
                    <Projects projectRef={projectRef} />
                    <div className="w-full h-screen"></div>
                </div>
            )}
        </div>
    );
}
