// components/services-section.tsx
import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Aplikasi web modern dengan React, Next.js, dan teknologi terkini.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance"]
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Aplikasi mobile native dan cross-platform untuk iOS dan Android.",
      features: ["React Native", "Flutter", "Native iOS/Android"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Desain antarmuka yang intuitive dan pengalaman pengguna yang optimal.",
      features: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      icon: "🚀",
      title: "DevOps & Deployment",
      description: "Infrastruktur cloud dan deployment automation untuk aplikasi yang scalable.",
      features: ["CI/CD Pipeline", "Cloud Infrastructure", "Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600">
            Kami menyediakan layanan pengembangan digital end-to-end untuk 
            membantu bisnis Anda berkembang di era digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}