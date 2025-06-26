import React, { useState } from "react";
import capsuleImage from "../assets/3image.jpg"; // Make sure this path is correct

const services = [
  {
    title: "Branding and Identity Design",
    description: "At our agency, we have a unique approach to web..."
  },
  {
    title: "Website Design and Development",
    description: "We craft responsive, user-friendly websites that drive results."
  },
  {
    title: "Advertising and Marketing Campaigns",
    description: "We strategize and execute compelling campaigns that convert."
  },
  {
    title: "Creative Consulting and Development",
    description: "Collaborating to turn your innovative ideas into reality."
  }
];

const BusinessSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="bg-black text-white min-h-screen py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Capsule and Heading */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Capsule Image */}
          <div className="rounded-full overflow-hidden w-48 h-20 flex-shrink-0 bg-yellow-400 flex items-center justify-center">
            <img
              src={capsuleImage}
              alt="team"
              className="object-cover w-full h-full rounded-full"
            />
          </div>

          {/* Headings */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-light leading-snug">
              <span className="font-semibold">Unique</span> Ideas<br />
              For <span className="font-semibold">Your</span> Business.
            </h2>
          </div>

          {/* Button */}
          <div className="mt-6 lg:mt-0">
            <button className="bg-yellow-400 text-black font-semibold rounded-full px-6 py-3 flex items-center gap-2">
              WHAT WE DO
              <span className="bg-black text-yellow-400 p-2 rounded-full">→</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="bg-zinc-900 rounded-xl p-6 transition-all duration-300 ease-in-out cursor-pointer min-h-[160px]"
            >
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p
                className={`text-gray-400 transition-opacity duration-300 ease-in-out ${
                  hoverIndex === index ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
