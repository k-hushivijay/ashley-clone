import React from "react";
import img1 from "../assets/4image.jpg";
import img2 from "../assets/5image.jpg";
import img3 from "../assets/6image boy.jpg";
import img4 from "../assets/7image.jpg";

const MeetTeamSection = () => {
  return (
    <section className="bg-white text-black min-h-screen py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-6xl font-light leading-tight">
            Meet <br /> <span className="font-semibold">Our</span> Team
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            Together, our creative team is committed to delivering impactful work that exceeds expectations.
          </p>

          <button className="mt-8 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2">
            READ MORE <span className="bg-black text-yellow-400 p-2 rounded-full">→</span>
          </button>
        </div>

        {/* Right Grid of Images */}
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded overflow-hidden">
            <img src={img1} alt="Team Member 1" className="object-cover w-full h-auto rounded-md shadow-md" />
          </div>
          <div className="rounded overflow-hidden">
            <img src={img2} alt="Team Member 2" className="object-cover w-full h-auto rounded-md shadow-md" />
          </div>
          <div className="rounded overflow-hidden">
            <img src={img3} alt="Team Member 3" className="object-cover w-full h-auto rounded-md shadow-md" />
          </div>
          <div className="rounded overflow-hidden">
            <img src={img4} alt="Team Member 4" className="object-cover w-full h-auto rounded-md shadow-md" />
          </div>
        </div>
      </div>

      {/* Founders Note */}
      <p className="text-right text-sm text-gray-500 mt-4 mr-10">* The founders of our agency</p>
    </section>
  );
};

export default MeetTeamSection;
