import React from "react";

function Testimonial() {
  const testimonials = [
    {
      quote: "NodeAct’s team streamlined our operations with a well-designed software solution. The impact was immediate.",
      author: "John D."
    },
    {
      quote: "Professional, efficient, and innovative. Our app launch was a success thanks to their expertise.",
      author: "Sarah L."
    },
    {
      quote: "Their technical support is exceptional. We received timely updates and thorough documentation.",
      author: "Michael R."
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
    <div className="px-8 pt-16 bg-black overflow-hidden">
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