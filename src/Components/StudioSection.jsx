import React from "react";
import teamImage from "../assets/1image.jpg";
import womanImage from "../assets/2image.jpg";// bottom left circular image

export default function StudioSection() {
  return (
    <section className="bg-white w-full py-20 px-4 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Discover <br />
            <span className="font-light">Our Studio</span>
          </h2>
          <p className="text-neutral-600 text-lg mb-10 leading-relaxed font-[DM Sans]">
            We are a team of passionate individuals dedicated to transforming ideas
            into reality. Our studio thrives on diversity, collaboration, and a drive
            to create extraordinary experiences.
          </p>

          {/* Circular Image + Caption */}
          <div className="flex items-center gap-4">
            <img
              src={womanImage}
              alt="team member"
              className="w-20 h-20 rounded-full object-cover shadow-lg"
            />
            <div>
              <p className="text-sm font-semibold text-black">
                Passionately Creating Design
              </p>
              <p className="text-xs text-neutral-500">
                Wonders: Unleashing Boundless Creativity
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-end items-center">
          <img
            src={teamImage}
            alt="Studio team"
            className="w-[80%] rounded-xl object-cover shadow-xl"
            style={{ transform: "scale(1.05)" }}
          />
        </div>
      </div>
    </section>
  );
}
