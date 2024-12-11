import { Button } from '@/components/ui/button';
import { Car, Luggage, Star, Users, Wifi } from 'lucide-react';

interface TransportListProps {
  vehicles: any[];
  isLoading: boolean;
}

export function TransportList({ vehicles, isLoading }: TransportListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (vehicles.length === 0) {
    return (
      <div className="text-center py-12">
        <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900">No vehicles found</h3>
        <p className="text-gray-600">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {vehicles.map((vehicle) => (
        <div
          key={vehicle.id}
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-64 h-48">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{vehicle.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Car className="h-4 w-4" />
                    {vehicle.type} by {vehicle.company}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">${vehicle.price}</p>
                  <p className="text-sm text-gray-600">per hour</p>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-gray-400" />
                  <span>{vehicle.capacity} passengers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Luggage className="h-5 w-5 text-gray-400" />
                  <span>{vehicle.luggage} suitcases</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{vehicle.rating}</span>
                  <span className="text-gray-600">
                    ({vehicle.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {vehicle.features.map((feature: string) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    <Wifi className="h-3 w-3" />
                    {feature}
                  </span>
                ))}
              </div>

              <Button>Book Now</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}