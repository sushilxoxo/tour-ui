import { Itinerary } from '@/types/itinerary';
import { ItineraryCard } from './itinerary-card';

interface ItineraryGridProps {
  itineraries: Itinerary[];
}

export function ItineraryGrid({ itineraries }: ItineraryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {itineraries.map((itinerary) => (
        <ItineraryCard key={itinerary.id} itinerary={itinerary} />
      ))}
    </div>
  );
}