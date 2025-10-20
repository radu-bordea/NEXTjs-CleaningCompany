'use client';

const services = [
{
  title: 'Curățenie rezidențială',
  desc: 'Întreținere regulată pentru blocuri de apartamente, holuri, scări și spații comune — menținem locuința dumneavoastră impecabilă în fiecare zi.',
  icon: '🏠',
},
{
  title: 'Curățenie geamuri și suprafețe din sticlă',
  desc: 'Curățenie profesională, interioară și exterioară, a geamurilor pentru o strălucire clară, fără urme, a clădirii dumneavoastră.',
  icon: '🧽',
},
{
  title: 'Curățenie generală și dezinfectare',
  desc: 'Curățenie în profunzime pentru spațiile comune, lifturi și pardoseli, folosind produse ecologice și echipamente moderne.',
  icon: '🧼',
},

];

const Services = () => {
  return (
    <section
      id="servicii"
      className="py-24 bg-neutral-50 scroll-mt-16"
    >
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Serviciile Noastre
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md p-8 text-left hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
