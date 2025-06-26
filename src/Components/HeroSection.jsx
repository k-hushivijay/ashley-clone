export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-start px-6 md:px-20 font-sans">
      <h1 className="text-5xl md:text-6xl leading-tight font-light">
        <span className="font-bold">Designing</span> a Better <br />
        <span className="font-bold">World</span> Today
      </h1>

      <p className="mt-6 text-gray-400 max-w-lg">
        Welcome to our world of endless imagination and boundless creativity.
        Together, let's embark on a remarkable journey where dreams become tangible realities.
      </p>

      <div className="flex items-center gap-6 mt-10">
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-full flex items-center gap-3 font-semibold">
          WHAT WE DO
          <span className="bg-black text-white rounded-full p-1">
            ➜
          </span>
        </button>
        <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 border border-gray-700">
          VIEW WORKS
          <span className="bg-neutral-800 text-white rounded-full p-1">
            ➜
          </span>
        </button>
      </div>
    </section>
  );
}
