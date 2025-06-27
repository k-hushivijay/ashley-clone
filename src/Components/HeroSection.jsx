import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  useEffect(() => {
    gsap.from(".headline span", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".cta-btn", {
      opacity: 0,
      scale: 0.8,
      delay: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center relative overflow-hidden font-sans">
  <div className="px-6 md:px-20 lg:px-32 z-10">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight headline space-y-2">
      <span className="block text-white">Designing</span>
      <span className="block text-white">a Better</span>
      <span className="block text-white">World Today</span>
    </h1>

    <p className="mt-6 text-gray-400 max-w-xl text-base md:text-lg">
      Welcome to our world of endless imagination and boundless creativity.
      Together, let's embark on a remarkable journey where dreams become tangible realities.
    </p>

    <div className="mt-10 flex flex-wrap gap-4 items-center">
      <button className="cta-btn bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition">
        What We Do →
      </button>
      <button className="cta-btn bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-full transition">
        View Works →
      </button>
    </div>
  </div>

  {/* Scroll down ring */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="w-14 h-14 border-4 border-orange-500 rounded-full animate-pulse" />
      <span className="absolute text-white text-xl animate-bounce">↓</span>
    </div>
    <p className="text-sm text-white mt-2 tracking-wider">Scroll Down</p>
  </div>
</section>
  );
}
