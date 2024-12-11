import { Button } from '@/components/ui/button';
import { Edit2, MoreVertical, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ItineraryList() {
  const itineraries = [
    {
      id: '1',
      title: 'Romantic Paris Getaway',
      status: 'published',
      views: 1250,
      bookings: 45,
      rating: 4.8,
      earnings: 2800,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    },
    {
      id: '2',
      title: 'Tokyo Culture Explorer',
      status: 'published',
      views: 980,
      bookings: 32,
      rating: 4.9,
      earnings: 2100,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    },
    {
      id: '3',
      title: 'Bali Adventure Escape',
      status: 'draft',
      views: 0,
      bookings: 0,
      rating: 0,
      earnings: 0,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">Your Itineraries</h2>
      </div>
      <div className="divide-y">
        {itineraries.map((itinerary) => (
          <div key={itinerary.id} className="p-6 flex items-center gap-4">
            <img
              src={itinerary.image}
              alt={itinerary.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{itinerary.title}</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/creator/itineraries/${itinerary.id}/edit`}>
                      <Edit2 className="h-4 w-4 mr-1" />
                      Edit
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Status</p>
                  <p className={`font-medium ${
                    itinerary.status === 'published' ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {itinerary.status.charAt(0).toUpperCase() + itinerary.status.slice(1)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Views</p>
                  <p className="font-medium">{itinerary.views.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-600">Bookings</p>
                  <p className="font-medium">{itinerary.bookings}</p>
                </div>
                <div>
                  <p className="text-gray-600">Rating</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">
                      {itinerary.rating ? itinerary.rating.toFixed(1) : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}