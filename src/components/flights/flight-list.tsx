import { Button } from '@/components/ui/button';
import { Clock, Plane } from 'lucide-react';

interface FlightListProps {
  flights: any[];
  isLoading: boolean;
}

export function FlightList({ flights, isLoading }: FlightListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (flights.length === 0) {
    return (
      <div className="text-center py-12">
        <Plane className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900">No flights found</h3>
        <p className="text-gray-600">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {flights.map((flight) => (
        <div
          key={flight.id}
          className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Plane className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium">{flight.airline}</h3>
                <p className="text-sm text-gray-600">Flight {flight.flightNumber}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">${flight.price}</p>
              <p className="text-sm text-gray-600">{flight.seatsAvailable} seats left</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-2xl font-bold">{flight.departure.time}</p>
                  <p className="text-sm text-gray-600">{flight.departure.airport}</p>
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <div className="h-0.5 flex-1 bg-gray-300" />
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    {flight.duration}
                  </div>
                  <div className="h-0.5 flex-1 bg-gray-300" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">{flight.arrival.time}</p>
                  <p className="text-sm text-gray-600">{flight.arrival.airport}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              {flight.stops === 0 ? (
                <span className="text-green-600 text-sm font-medium">Direct</span>
              ) : (
                <span className="text-gray-600 text-sm">
                  {flight.stops} stop in {flight.stopover}
                </span>
              )}
            </div>
            <Button>Select Flight</Button>
          </div>
        </div>
      ))}
    </div>
  );
}