import { Button } from '@/components/ui/button';
import { Building2, MapPin, Star, Wifi } from 'lucide-react';

interface HotelListProps {
  hotels: any[];
  isLoading: boolean;
}

export function HotelList({ hotels, isLoading }: HotelListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (hotels.length === 0) {
    return (
      <div className="text-center py-12">
        <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900">No hotels found</h3>
        <p className="text-gray-600">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-64 h-48">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{hotel.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {hotel.location}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">${hotel.price}</p>
                  <p className="text-sm text-gray-600">per night</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{hotel.rating}</span>
                  <span className="text-gray-600">
                    ({hotel.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: hotel.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {hotel.amenities.map((amenity: string) => (
                  <span
                    key={amenity}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    <Wifi className="h-3 w-3" />
                    {amenity}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{hotel.type}</span>
                <Button>View Details</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}