'use client';

const services = [
  {
    title: 'Residential Cleaning',
    desc: 'Regular maintenance for apartment buildings, lobbies, staircases, and common areas — keeping your residence spotless every day.',
    icon: '🏠',
  },
  {
    title: 'Window & Glass Cleaning',
    desc: 'Professional interior and exterior window cleaning that ensures a clear, streak-free shine for your building.',
    icon: '🧽',
  },
  {
    title: 'Deep Cleaning & Sanitizing',
    desc: 'Comprehensive deep cleaning for shared spaces, elevators, and floors using eco-friendly products and modern equipment.',
    icon: '🧼',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-neutral-50 scroll-mt-16"
    >
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Cleaning Services
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
