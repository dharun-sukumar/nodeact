import React from "react";
import FlowingMenu from "../../Components/FlowingMenu";

function Offerings() {
  const demoItems = [
    { link: '#', text: 'Mobile & Web App Development', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Custom Software Solutions', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'AI & Automation', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Cloud & Backend Services', image: 'https://picsum.photos/600/400?random=4' }
  ];
  return (
    <div className="">
      <p className="z-50 text-[#FFC11F] mt-32 uppercase 2xl:text-3xl xl:text-xl">our expertise</p>
      <div className="bg-black mt-32 text-base relative md:h-[90vh] h-[60vh]">
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
}

export default Offerings;