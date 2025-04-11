import React from "react";
import tv from "../assets/tv.png";
import switch1 from "../assets/switch.png";
import DecryptedText from "../Components/DecryptedText";
import Backgorund from "../Components/Background";

function Home() {
    return (
        <div className="home-container p-8 overflow-hidden bg-custom-radial h-screen font-light">
            <Backgorund
                speed={0.5}
                squareSize={40}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor='#404040'
                hoverFillColor='#222'
                className="absolute top-0 left-0 w-full h-full pointer-events-none"

            />
            <p className="before:w-[4px] before:h-[100vh] before:mb-8 before:bottom-[100%] before:left-1/2 before:bg-white before:absolute 2xl:text-4xl xl:text-3xl mt-16 font-bold writing-mode-vertical">NODEACT</p>

            <div className="absolute bottom-10 right-16 flex flex-col items-center">
                <div>
                    <div className="flex items-center justify-end">
                        <div className="2xl:text-8xl lg:text-6xl md:text-5xl"><DecryptedText delay={10}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px" text="Building digital" /></div>
                        <div className="relative">
                            <img src={tv} alt="tv" className="ml-10 h-16 lg:h-auto" />
                            <p className="absolute lg:top-4 lg:left-10 top-3 left-14 lg:text-8xl md:text-6xl lg:w-[1em] lg:h-[1em] flex items-center justify-center">*</p>
                        </div>
                    </div>
                    <div className="2xl:text-8xl lg:text-6xl md:text-5xl flex justify-end lg:mr-[8.5rem] mr-[6rem]"><DecryptedText delay={10}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px" text="solutions that will" /></div>
                    <div className="flex items-center justify-end mr-30">
                        <div className="2xl:text-8xl lg:text-6xl md:text-5xl"><DecryptedText delay={10}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px" text="drive your success" /></div>
                        <div className="relative">
                            <img src={switch1} alt="switch" className="ml-10 h-16 lg:h-auto" />
                            <p className="absolute lg:top-8 top-[20px] left-[76px] lg:left-[84px] lg:text-6xl text-5xl lg:w-[1em] lg:h-[1em] flex items-center justify-center">*</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;