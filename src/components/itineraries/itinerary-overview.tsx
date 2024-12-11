import { Button } from '@/components/ui/button';
import { Itinerary } from '@/types/itinerary';
import { Calendar, Clock, Tag, Users } from 'lucide-react';

interface ItineraryOverviewProps {
  itinerary: Itinerary;
  onBook: () => void;
}

export function ItineraryOverview({ itinerary, onBook }: ItineraryOverviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <p className="text-gray-600 mb-6">{itinerary.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-medium">Duration</p>
            <p className="text-gray-600">{itinerary.duration} days</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-medium">Group Size</p>
            <p className="text-gray-600">2-8 people</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-medium">Best Time</p>
            <p className="text-gray-600">Mar - Nov</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Tag className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-medium">Theme</p>
            <p className="text-gray-600">{itinerary.tags.join(', ')}</p>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600">From</p>
            <p className="text-3xl font-bold">${itinerary.price.toLocaleString()}</p>
            <p className="text-sm text-gray-600">per person</p>
          </div>
          <Button size="lg" onClick={onBook}>Book Now</Button>
        </div>
      </div>
    </div>
  );
}