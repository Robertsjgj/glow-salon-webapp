import React from 'react';
import { ServiceCard } from './ServiceCard';
import type { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    name: 'Classic Haircut & Style',
    description: 'Professional haircut and styling tailored to your preferences. Includes consultation, wash, and blow-dry.',
    duration: 60,
    price: 75,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80'
  },
  {
    id: '2',
    name: 'Signature Facial',
    description: 'Rejuvenating facial treatment customized for your skin type. Includes cleansing, exfoliation, and mask.',
    duration: 90,
    price: 120,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80'
  },
  {
    id: '3',
    name: 'Relaxation Massage',
    description: 'Full-body massage using Swedish techniques to reduce stress and promote relaxation.',
    duration: 60,
    price: 90,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80'
  }
];

export function Services() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose from our range of premium beauty and wellness services
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}