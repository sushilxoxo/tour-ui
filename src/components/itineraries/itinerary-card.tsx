import { Itinerary } from '@/types/itinerary';
import { Clock, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ItineraryCardProps {
  itinerary: Itinerary;
}

export function ItineraryCard({ itinerary }: ItineraryCardProps) {
  return (
    <Link
      to={`/itineraries/${itinerary.id}`}
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={itinerary.imageUrl}
          alt={itinerary.title}
          className="object-cover w-full h-48"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-900">
          ${itinerary.price.toLocaleString()}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4" />
          {itinerary.destination}
          <Clock className="h-4 w-4 ml-2" />
          {itinerary.duration} days
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
          {itinerary.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{itinerary.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={itinerary.creator.avatar}
              alt={itinerary.creator.name}
              className="h-6 w-6 rounded-full"
            />
            <span className="text-sm text-gray-600">{itinerary.creator.name}</span>
          </div>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900">{itinerary.rating}</span>
            <span className="text-sm text-gray-500">({itinerary.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}