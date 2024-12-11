import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface TransportFiltersProps {
  onFilterChange: (filters: any) => void;
}

export function TransportFilters({ onFilterChange }: TransportFiltersProps) {
  const [filters, setFilters] = useState({
    priceRange: [0, 200],
    vehicleTypes: [] as string[],
    features: [] as string[],
    capacity: 'any',
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
          <h3 className="font-medium mb-4">Price per hour</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">$0</span>
              <input
                type="range"
                min="0"
                max="500"
                step="10"
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
          <h3 className="font-medium mb-4">Vehicle Type</h3>
          <div className="space-y-2">
            {[
              'Sedan',
              'SUV',
              'Van',
              'Luxury',
              'Electric',
              'Minibus',
            ].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.vehicleTypes.includes(type)}
                  onChange={(e) => {
                    const newTypes = e.target.checked
                      ? [...filters.vehicleTypes, type]
                      : filters.vehicleTypes.filter((t) => t !== type);
                    handleFilterChange('vehicleTypes', newTypes);
                  }}
                  className="text-blue-600 rounded"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Features</h3>
          <div className="space-y-2">
            {[
              'WiFi',
              'Water',
              'Child Seat',
              'Professional Driver',
              'Entertainment System',
              'Extra Luggage Space',
            ].map((feature) => (
              <label key={feature} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature)}
                  onChange={(e) => {
                    const newFeatures = e.target.checked
                      ? [...filters.features, feature]
                      : filters.features.filter((f) => f !== feature);
                    handleFilterChange('features', newFeatures);
                  }}
                  className="text-blue-600 rounded"
                />
                {feature}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Passenger Capacity</h3>
          <div className="space-y-2">
            {[
              { label: 'Any', value: 'any' },
              { label: '1-4 passengers', value: '1-4' },
              { label: '5-7 passengers', value: '5-7' },
              { label: '8+ passengers', value: '8+' },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="capacity"
                  value={option.value}
                  checked={filters.capacity === option.value}
                  onChange={(e) =>
                    handleFilterChange('capacity', e.target.value)
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
              priceRange: [0, 200],
              vehicleTypes: [],
              features: [],
              capacity: 'any',
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