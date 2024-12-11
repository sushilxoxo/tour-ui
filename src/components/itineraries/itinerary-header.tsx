import { Itinerary } from '@/types/itinerary';
import { Clock, MapPin, Star } from 'lucide-react';

interface ItineraryHeaderProps {
  itinerary: Itinerary;
}

export function ItineraryHeader({ itinerary }: ItineraryHeaderProps) {
  return (
    <div className="relative h-96">
      <img
        src={itinerary.imageUrl}
        alt={itinerary.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm mb-2">
            <MapPin className="h-4 w-4" />
            {itinerary.destination}
            <Clock className="h-4 w-4 ml-4" />
            {itinerary.duration} days
          </div>
          <h1 className="text-4xl font-bold mb-4">{itinerary.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={itinerary.creator.avatar}
                alt={itinerary.creator.name}
                className="h-10 w-10 rounded-full border-2 border-white"
              />
              <span className="text-lg">Created by {itinerary.creator.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-lg font-medium">{itinerary.rating}</span>
              <span className="text-sm">({itinerary.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}