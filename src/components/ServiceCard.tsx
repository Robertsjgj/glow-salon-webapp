import React from 'react';
import { Clock, DollarSign } from 'lucide-react';
import { Service } from '../types';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={service.image} 
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
        <p className="mt-2 text-gray-600">{service.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-gray-700">
            <Clock className="h-5 w-5 mr-2" />
            <span>{service.duration} min</span>
          </div>
          <div className="flex items-center text-gray-700">
            <DollarSign className="h-5 w-5 mr-1" />
            <span>{service.price}</span>
          </div>
        </div>
        <Link
          to={`/book?service=${service.id}`}
          className="mt-4 w-full btn-primary inline-block text-center"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}