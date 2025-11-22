import React from 'react';
import w1 from "../assets/w1.PNG"
import w2 from "../assets/w2.PNG"
import m1 from "../assets/m1.PNG"
import m2 from "../assets/m2.PNG"

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Yash Sahu",
      position: "Software Engineer at HCL Technologies",
      image: m1,
      text: "Moattar is a visionary developer. His attention to detail and creativity blew us away. Our project was a massive success because of him."
    },
    {
      id: 2,
      name: "Heather Forster",
      position: "UI/UX Designer at PixelWorks",
      image: w1,
      text: "Working with Moattar was an absolute pleasure. He brings design and code together like magic. Highly recommend him!"
    },
    {
      id: 3,
      name: "Amy Jacobson",
      position: "Tech Manager at CodeEmpire",
      image: m2,
      text: "From concept to execution, Moattar handled everything flawlessly. His work ethic and innovation are unmatched."
    },
    {
      id: 4,
      name: "Carry Smith",
      position: "CTO at Innovate Labs",
      image: w2,
      text: "Moattar transformed our outdated platform into something modern and powerful. His skills are world-class."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          What People Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-105 hover:-rotate-1"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-white"
                />
                
                <p className="text-gray-300 italic text-sm md:text-base mb-3 leading-snug">
                  "{testimonial.text}"
                </p>
                
                <h3 className="text-lg font-bold mb-0.5">
                  {testimonial.name}
                </h3>
                
                <p className="text-gray-500 text-xs">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;