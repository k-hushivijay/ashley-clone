import React, { useState } from "react";
import img1 from "../assets/4image.jpg";
import img2 from "../assets/5image.jpg";
import img3 from "../assets/6image boy.jpg";
import img4 from "../assets/7image.jpg";
import img5 from "../assets/3image.jpg";
import img6 from "../assets/1image.jpg";
import img7 from "../assets/2image.jpg";
import BrandSlider from "./BrandSlider";

const testimonials = [
  {
    name: "Sarah Newman",
    company: "ENVATO MARKET",
    image: img1,
    text:
      "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
  },
  {
    name: "Daniel Smith",
    company: "NHI INC.",
    image: img2,
    text:
      "Absolutely fantastic team to work with! Their creativity and professionalism helped us achieve great results in a short time. We will surely collaborate again in future projects.",
  },
  {
    name: "Jessica Lee",
    company: "ENVATO MARKET",
    image: img3,
    text:
      "Highly innovative team! Their design and development skills exceeded our expectations. Truly one of the best creative agencies we've worked with.",
  },
];

export default function CustomerSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-[#f9f9f9] py-20 px-4 md:px-16 text-center text-gray-700">
      <p className="text-sm text-gray-400">
        Customer reviews are a valuable source of information for both businesses and consumers.
      </p>
      <h2 className="text-4xl md:text-5xl font-light my-4">
        <span className="font-bold text-black">Customer</span> Voices:<br />
        <span className="font-bold text-black">Hear What</span> They Say!
      </h2>

      {/* Avatar List */}
      <div className="flex justify-center gap-4 flex-wrap my-8">
        {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Customer ${index}`}
            onClick={() => setSelected(index % testimonials.length)}
            className={`w-16 h-16 rounded-full object-cover border-4 transition-all duration-300 cursor-pointer ${
              selected === index % testimonials.length
                ? "border-yellow-400"
                : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* Custom Pagination Dots */}
      <div className="flex justify-center gap-2 mb-12">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-4 h-4 border-2 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center ${
              selected === i ? "border-yellow-500" : "border-gray-300"
            }`}
            onClick={() => setSelected(i)}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                selected === i ? "bg-yellow-500" : "bg-gray-300"
              }`}
            ></div>
          </span>
        ))}
      </div>

      {/* Testimonial */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-3xl text-yellow-400 mb-2">&#10077;</div>
        <h3 className="text-xl font-semibold text-black">
          {testimonials[selected].name}
        </h3>
        <p className="text-sm tracking-wide mb-4 uppercase">
          {testimonials[selected].company}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {testimonials[selected].text}
        </p>
      </div>

      {/* Brand Logos */}
     <BrandSlider />
    </section>
  );
}
