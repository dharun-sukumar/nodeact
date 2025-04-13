import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import website from "../../assets/Website.png";
import store from "../../assets/store.png";
import cloud from "../../assets/Cloud.png";
import sparkle from "../../assets/spark.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Offers() {
    const containerRef = useRef(null);

    useEffect(() => {
        const elements = gsap.utils.toArray(".reveal-element");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom 80%",
                scrub: 1,
            }
        });

        // Animate each element with stagger
        tl.fromTo(elements, 
            { opacity: 0, y: 20 },
            { 
                opacity: 1, 
                y: 0, 
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out"
            }
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className=" min-h-[70vh] md:h-[100vh] px-8 relative bg-black">
            <p className="z-50 text-[#FFC11F] uppercase 2xl:text-3xl xl:text-xl">What do we offer</p>
            <div className="2xl:text-8xl lg:text-6xl md:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-2 md:gap-6 justify-center">
                        <p className="reveal-element">From websites</p> 
                        <img src={website} alt="website" className="reveal-element h-10 md:h-auto" />
                        <p className="reveal-element">to Mobile</p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-6 justify-center">
                        <p className="reveal-element">apps</p> 
                        <img src={store} alt="store" className="reveal-element h-10 md:h-auto" />
                        <p className="reveal-element">, from AI</p> 
                        <img src={sparkle} alt="spark" className="reveal-element h-6 md:h-auto" /> 
                        <p className="reveal-element">automation</p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-6 justify-center">
                        <p className="reveal-element">to cloud solutions</p> 
                        <img src={cloud} alt="store" className="reveal-element h-10 md:h-auto" />
                    </div>
                </div>
            </div>
            <p className="2xl:text-5xl xl:text-3xl absolute bottom-10 right-8 reveal-element">
                —tailored digital experiences that drive growth 
            </p>
        </div>
    );
}

export default Offers;