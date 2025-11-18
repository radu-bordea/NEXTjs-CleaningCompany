'use client';

import Image from 'next/image';

const works = [
  {
    id: 'apartment-101',
    title: 'apartment-101 New Town Residence',
    duration: 'Durata lucrării: ~3 ore',
    desc: 'Curățenie generală în apartament: aspirare, șters praful, mopuit pardoselile, curățare bucătărie și baie, aranjare obiecte decorative și textilere.',
    image: '/apt-1.jpg',
    alt: 'Curățenie în apartament New Town Residence',
  },
  {
    id: 'apartment-102',
    title: 'apartment-102 Marmura Residence',
    duration: 'Durata lucrării: ~2.5 ore',
    desc: 'Curățenie de întreținere pentru living și dormitoare, curățare geamuri interioare, organizare haine și obiecte personale, dezinfectare suprafețe frecvent atinse.',
    image: '/apt-2.jpg',
    alt: 'Curățenie în apartament Marmura Residence',
  },
  {
    id: 'apartment-103',
    title: 'apartment-103 Park Residences 5',
    duration: 'Durata lucrării: ~4 ore',
    desc: 'Curățenie profundă după mutare: degresare bucătărie, curățare și dezinfectare băi, mopuit și aspirat în toate camerele, aranjare mobilier ușor și obiecte decorative.',
    image: '/apt-3.jpg',
    alt: 'Curățenie în apartament Park Residences 5',
  },
];

const Lucrari = () => {
  return (
    <section
      id="lucrari"
      className="py-24 bg-neutral-50 scroll-mt-16"
    >
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Lucrările Noastre
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden text-left hover:shadow-lg transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={work.image}
                  alt={work.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {work.title}
                </h3>
                <p className="text-sm font-medium text-gray-500">
                  {work.duration}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {work.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lucrari;
