import React from "react";

function Testimonial() {
  const testimonials = [
    {
      quote:  "Working with the NodeAct team was a game-changer for us. They built two incredible apps—Products Outsourcing and Job Finder—that perfectly met our needs. The process was smooth, and their attention to detail made all the difference. Both apps launched on time and have been a hit with our users!",
      author: "David Akhvlediani."
    },
    {
      quote: "NodeAct is currently building an LMS for KVM Institute, and we’re already impressed with their progress. They’ve taken the time to understand our educational goals and are crafting a platform that’s both functional and easy to use. Their team’s dedication is top-notch!",
      author: "Kannan."
    },
    {
      quote: "Collaborating with NodeAct to develop a custom chat app for one of our clients was a fantastic experience. Shri S from Addtim Solutions here—their technical expertise and willingness to go the extra mile ensured we delivered a seamless, tailored solution. Our client loves it, and so do we!",
      author: "Shri S."
    },
    {
      quote:  "We hired NodeAct to refactor our application’s user interface, and the results were beyond our expectations. They took our clunky design and turned it into something sleek, intuitive, and user-friendly. Josiah Bravo here—our team at JJTech Innovations couldn’t be happier with their work!"      ,
      author: "Josiah Bravo."
    }
  ];

  // Create array of testimonial components and asterisks
  const testimonialItems = testimonials.flatMap((testimonial, index) => {
    const elements = [
      <div key={`t-${index}`} className="flex-shrink-0 flex flex-col items-end w-fit max-w-[40%] mx-4">
        <p className="text-2xl">"{testimonial.quote}"</p>
        <p className="text-2xl">– {testimonial.author}</p>
      </div>
    ];
    
    if (index !== testimonials.length) {
      elements.push(
        <p key={`a-${index}`} className="flex-shrink-0 text-9xl mx-4">*</p>
      );
    }
    return elements;
  });

  // Duplicate items for infinite scroll effect
  const duplicatedItems = [...testimonialItems, ...testimonialItems];

  return (
    <div className="lg:px-8 lg:pt-16 bg-black overflow-hidden">
      <p className="z-50 text-[#FFC11F] uppercase text-center text-3xl">What Users say</p>
      <div className="py-16 overflow-hidden">
        <div className="inline-flex animate-scroll">
          {duplicatedItems.map((item, index) => (
            React.cloneElement(item, { key: index })
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;