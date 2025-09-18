'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    role: "CEO",
    company: "TechSolutions",
    content: "Increíble servicio. El equipo fue muy profesional y entregó el proyecto antes de lo esperado. Definitivamente volveremos a trabajar con ellos.",
    rating: 5,
    avatar: "/avatars/user1.jpg",
    date: "15 Enero 2024"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Marketing Manager",
    company: "DigitalAgency",
    content: "La calidad del trabajo superó nuestras expectativas. Muy recomendable para cualquier empresa que busque resultados reales.",
    rating: 4,
    avatar: "/avatars/user2.jpg",
    date: "10 Febrero 2024"
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Product Owner",
    company: "StartUpXYZ",
    content: "Excelente comunicación y atención al detalle. Entendieron perfectamente nuestras necesidades y las implementaron de manera impecable.",
    rating: 5,
    avatar: "/avatars/user3.jpg",
    date: "5 Marzo 2024"
  },
  {
    id: 4,
    name: "Javier López",
    role: "CTO",
    company: "InnovationCorp",
    content: "Profesionales altamente capacitados. El proyecto fue complejo pero lo manejaron con expertise y eficiencia.",
    rating: 5,
    avatar: "/avatars/user4.jpg",
    date: "20 Marzo 2024"
  },
  {
    id: 5,
    name: "Laura Sánchez",
    role: "Design Lead",
    company: "CreativeStudio",
    content: "El diseño final fue exactamente lo que imaginábamos. Muy creativos y atentos a los feedbacks.",
    rating: 4,
    avatar: "/avatars/user5.jpg",
    date: "12 Abril 2024"
  },
  {
    id: 6,
    name: "Miguel Torres",
    role: "Founder",
    company: "TechStart",
    content: "Transformaron completamente nuestra plataforma. Los resultados han sido extraordinarios para nuestro negocio.",
    rating: 5,
    avatar: "/avatars/user6.jpg",
    date: "3 Mayo 2024"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`text-lg ${
            index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function TestimoniosPage() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const filteredTestimonials = selectedRating
    ? testimonials.filter(testimonial => testimonial.rating === selectedRating)
    : testimonials;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Testimonios de Clientes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre lo que nuestros clientes dicen sobre nuestros servicios y cómo hemos ayudado a transformar sus negocios.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          <button
            onClick={() => setSelectedRating(null)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedRating === null
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Todos
          </button>
          {[5, 4, 3].map(rating => (
            <button
              key={rating}
              onClick={() => setSelectedRating(rating)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedRating === rating
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {rating} Estrellas
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <StarRating rating={testimonial.rating} />
              
              {/* Content */}
              <p className="text-gray-700 my-4 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-6">
                <div className="relative w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} · {testimonial.company}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay testimonios con la calificación seleccionada.
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">{testimonials.length}+</div>
            <div className="text-gray-600">Testimonios</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">
              {Math.round(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length * 10) / 10}
            </div>
            <div className="text-gray-600">Rating Promedio</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600">Clientes Satisfechos</div>
          </div>
        </div>
      </div>
    </div>
  );
}