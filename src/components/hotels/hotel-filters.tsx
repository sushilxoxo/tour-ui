import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useState } from 'react';

interface HotelFiltersProps {
  onFilterChange: (filters: any) => void;
}

export function HotelFilters({ onFilterChange }: HotelFiltersProps) {
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    stars: [] as number[],
    amenities: [] as string[],
    propertyType: 'any',
  });

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Filters</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-4">Price per night</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">$0</span>
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  handleFilterChange('priceRange', [0, parseInt(e.target.value)])
                }
                className="flex-1"
              />
              <span className="text-sm text-gray-600">
                ${filters.priceRange[1]}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Star Rating</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.stars.includes(rating)}
                  onChange={(e) => {
                    const newStars = e.target.checked
                      ? [...filters.stars, rating]
                      : filters.stars.filter((r) => r !== rating);
                    handleFilterChange('stars', newStars);
                  }}
                  className="text-blue-600 rounded"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Amenities</h3>
          <div className="space-y-2">
            {[
              'Free WiFi',
              'Pool',
              'Spa',
              'Fitness Center',
              'Restaurant',
              'Room Service',
              'Bar',
              'Parking',
            ].map((amenity) => (
              <label key={amenity} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity)}
                  onChange={(e) => {
                    const newAmenities = e.target.checked
                      ? [...filters.amenities, amenity]
                      : filters.amenities.filter((a) => a !== amenity);
                    handleFilterChange('amenities', newAmenities);
                  }}
                  className="text-blue-600 rounded"
                />
                {amenity}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Property Type</h3>
          <div className="space-y-2">
            {[
              { label: 'Any Type', value: 'any' },
              { label: 'Hotels', value: 'hotel' },
              { label: 'Apartments', value: 'apartment' },
              { label: 'Resorts', value: 'resort' },
              { label: 'Villas', value: 'villa' },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="propertyType"
                  value={option.value}
                  checked={filters.propertyType === option.value}
                  onChange={(e) =>
                    handleFilterChange('propertyType', e.target.value)
                  }
                  className="text-blue-600"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            const defaultFilters = {
              priceRange: [0, 500],
              stars: [],
              amenities: [],
              propertyType: 'any',
            };
            setFilters(defaultFilters);
            onFilterChange(defaultFilters);
          }}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
}