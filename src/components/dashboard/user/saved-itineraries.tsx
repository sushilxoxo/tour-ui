import { Button } from '@/components/ui/button';
import { Heart, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SavedItineraries() {
  const savedItineraries = [
    {
      id: '1',
      title: 'Romantic Venice Escape',
      location: 'Venice, Italy',
      rating: 4.8,
      price: 1899,
      image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0',
    },
    {
      id: '2',
      title: 'Swiss Alps Adventure',
      location: 'Interlaken, Switzerland',
      rating: 4.9,
      price: 2499,
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b flex items-center justify-between">
        <h2 className="text-lg font-semibold">Saved Itineraries</h2>
        <Button variant="outline" size="sm" asChild>
          <Link to="/saved">View All</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {savedItineraries.map((itinerary) => (
          <div key={itinerary.id} className="group relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src={itinerary.image}
                alt={itinerary.title}
                className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{itinerary.title}</h3>
                <Heart className="h-5 w-5 text-red-500 fill-current" />
              </div>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {itinerary.location}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    {itinerary.rating}
                  </div>
                  <span className="font-medium">${itinerary.price}</span>
                </div>
              </div>
              <div className="mt-4">
                <Button size="sm" className="w-full" asChild>
                  <Link to={`/itineraries/${itinerary.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}