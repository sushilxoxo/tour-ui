import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Share2 } from 'lucide-react';

interface TripHeaderProps {
  trip: any;
}

export function TripHeader({ trip }: TripHeaderProps) {
  return (
    <div className="relative h-64">
      <img
        src={trip.image}
        alt={trip.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-white/80 mb-2">
                <Calendar className="h-4 w-4" />
                {trip.date}
                <MapPin className="h-4 w-4 ml-4" />
                {trip.location}
              </div>
              <h1 className="text-3xl font-bold text-white">{trip.title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}