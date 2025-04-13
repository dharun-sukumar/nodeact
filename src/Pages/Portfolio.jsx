import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import kntag from "../assets/kntag.jpeg";
import MercuryMart from "../assets/MercuryMart.jpeg";
import v1 from "../assets/videos/1.mp4";
import v2 from "../assets/videos/2.mp4";
import v3 from "../assets/videos/4.mp4";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".horizontal-container").offsetWidth
      }
    });
  }, []);

  return (
    <div className="relative bg-black overflow-x-hidden max-w-[100vw]">
      <p className="z-50 px-8 text-[#FFC11F] uppercase mt-16 2xl:text-3xl xl:text-xl">Our Portfolio</p>

      <div className="horizontal-container h-[100vh]" style={{
        width: `${500}%`,
        overflowX: "hidden"
      }}>
        <div className="flex h-screen w-full gap-8 md:gap-4 lg:gap-0 flex-nowrap">
          <section
            className="panel w-screen h-screen flex items-center justify-center flex-shrink-0"
          >
            <div className="relative w-fit border-2 border-[#FFC11F] rounded-2xl p-2">
              <img
                src={kntag}
                alt=""
                className="2xl:h-[600px] xl:h-[500px] rounded-md"
              />
            </div>
          </section>
          <section
            className="panel w-screen h-screen flex items-center justify-center flex-shrink-0"
          >
            <div className="relative w-fit border-2 border-[#FFC11F] rounded-2xl p-2">
              <img
                src={MercuryMart}
                alt=""
                className="2xl:h-[600px] xl:h-[500px] rounded-md"
              />
            </div>
          </section>
          <section
            className="panel w-screen h-screen flex items-center justify-center flex-shrink-0"
          >
            <div className="relative w-fit border-2 border-[#FFC11F] rounded-2xl p-2">
              <video
                className="2xl:h-[600px] w-[890px] xl:h-[500px] rounded-md"
                autoPlay
                loop
                muted
                src={v1}
                alt=""
              />
            </div>
          </section>
          <section
            className="panel w-screen h-screen flex items-center justify-center flex-shrink-0"
          >
            <div className="relative w-fit border-2 border-[#FFC11F] rounded-2xl p-2">
              <video
                className="2xl:h-[600px] w-[890px] xl:h-[500px] rounded-md"
                autoPlay
                loop
                muted
                src={v2}
                alt=""
              />
            </div>
          </section>
          <section
            className="panel w-screen h-screen flex items-center justify-center flex-shrink-0"
          >
            <div className="relative w-fit border-2 border-[#FFC11F] rounded-2xl p-2">
              <video
                className="2xl:h-[600px] w-[890px] xl:h-[500px] rounded-md"
                autoPlay
                loop
                muted
                src={v3}
                alt=""
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;