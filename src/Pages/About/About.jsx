import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
    const containerRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        const originalText = "At our core, we’re artists and innovators. We join forces with visionaries to breathe life into ideas—transforming creative sparks into elegant, scalable software that turns dreams into reality.";
        const words = originalText.split(/(\s+)/);
    
        textRef.current.innerHTML = words.map(word => 
            `<span class="word">${word}</span>`
        ).join('');
    
        // Force reflow to ensure DOM updates
        textRef.current.offsetHeight;
    
        const tween = gsap.to(".word", {
            color: "#FFC11F",
            stagger: 0.3,
            ease: "none",
            paused: true
        });
    
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "+=300%",
            pin: true,
            onUpdate: (self) => {
                tween.progress(self.progress);
            },
        });
    
        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();
    
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);
    
    return (
        <div ref={containerRef} className="h-[100vh] p-8 relative" style={{ background: "linear-gradient(180deg, #101010 40.51%, #000 100%)" }}>
            <p className="z-50 text-[#FFC11F] uppercase mt-16 2xl:text-3xl xl:text-xl">About</p>
            <div 
                ref={textRef}
                className="2xl:text-7xl xl:text-5xl w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
            />
            <div className="flex absolute bottom-10 w-full items-center justify-end gap-2 right-10 ">
                <div className="h-[2px] w-[50%] bg-white"></div>
                <p className="text-white 2xl:text-5xl xl:text-4xl font-bold after:content-['Our\00a0Purpose']"></p>
            </div>
        </div>
    );
}

export default About;