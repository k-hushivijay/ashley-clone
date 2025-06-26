export default function HeroSection() {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col justify-center px-6 md:px-20 font-cormorant overflow-hidden">
      {/* Rotating Net Background */}
      <div className="absolute right-0 top-0 w-full max-w-[50%] h-full pointer-events-none z-0">
        <div className="w-full h-full animate-spinSlow opacity-20">
          <img
            src="/net-polygon.png"
            alt="Net background"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Hero Text */}
      <div className="z-10">
        <h1 className="text-h1 leading-tight font-light animate-fadeInUp delay-100">
          <span className="font-bold">Designing</span> a Better <br />
          <span className="font-bold">World</span> Today
        </h1>

        <p className="mt-6 text-ashleyGray max-w-lg font-poppins animate-fadeInUp delay-300">
          Welcome to our world of endless imagination and boundless creativity.
          Together, let's embark on a journey where dreams become reality.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-6 mt-10 animate-fadeInUp delay-500">
          <button className="bg-ashleyGold text-black px-8 py-3 rounded-full flex items-center gap-3 font-semibold">
            WHAT WE DO
            <span className="bg-black text-white rounded-full p-1 px-2">➜</span>
          </button>
          <button className="bg-transparent text-white border border-gray-600 px-6 py-3 rounded-full flex items-center gap-3">
            VIEW WORKS
            <span className="bg-neutral-800 text-white rounded-full p-1 px-2">➜</span>
          </button>
        </div>
      </div>
    </section>
  );
}
