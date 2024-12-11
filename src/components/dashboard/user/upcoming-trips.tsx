import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function UpcomingTrips() {
  const trips = [
    {
      id: '1',
      title: 'Paris Getaway',
      date: 'Apr 15 - Apr 20, 2024',
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
      location: 'Paris, France',
    },
    {
      id: '2',
      title: 'Tokyo Adventure',
      date: 'May 10 - May 17, 2024',
      status: 'pending',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
      location: 'Tokyo, Japan',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">Upcoming Trips</h2>
      </div>
      <div className="divide-y">
        {trips.map((trip) => (
          <div key={trip.id} className="p-6 flex items-center gap-4">
            <img
              src={trip.image}
              alt={trip.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{trip.title}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    trip.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                </span>
              </div>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {trip.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {trip.location}
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/trips/${trip.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 border-t bg-gray-50">
        <Button asChild>
          <Link to="/itineraries">Plan New Trip</Link>
        </Button>
      </div>
    </div>
  );
}