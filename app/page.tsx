"use client";
import Image from "next/image";

const Home = () => {
  return (
    <section
      id="acasa"
      className="relative min-h-[80vh] md:min-h-screen isolate flex items-center"
    >
      {/* Background image using Next/Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/cleaning.jpg"
            alt="Cleaning team maintaining residential building common areas in Bucharest"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl text-neutral-700">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Curățenie rezidențială premium în București
          </h1>

          <p className="mt-4 text-base md:text-lg bg-neutral-700/80 leading-loose font-semibold p-2 rounded text-neutral-300">
            Curățenie ecologică și de încredere pentru clădiri rezidențiale din
            București — scări, holuri, lifturi, geamuri și spații comune —
            realizată de personal calificat.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-6 py-3 text-white font-semibold shadow hover:bg-amber-500 transition"
            >
              solicită o ofertă
            </a>
            <a
              href="#servicii"
              className="inline-flex items-center justify-center rounded-xl bg-white/90 px-6 py-3 text-gray-900 font-semibold shadow hover:bg-white transition"
            >
              serviciile noastre
            </a>
          </div>
        </div>
      </div>

      {/* Soft bottom fade into next section (optional) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Home;
