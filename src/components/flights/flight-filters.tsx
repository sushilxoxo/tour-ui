import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface FlightFiltersProps {
  onFilterChange: (filters: any) => void;
}

export function FlightFilters({ onFilterChange }: FlightFiltersProps) {
  const [filters, setFilters] = useState({
    maxPrice: 1000,
    stops: 'any',
    airlines: [] as string[],
    departureTime: 'any',
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
          <h3 className="font-medium mb-4">Price Range</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">$0</span>
            <input
              type="range"
              min="0"
              max="2000"
              step="100"
              value={filters.maxPrice}
              onChange={(e) =>
                handleFilterChange('maxPrice', parseInt(e.target.value))
              }
              className="flex-1"
            />
            <span className="text-sm text-gray-600">${filters.maxPrice}</span>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Stops</h3>
          <div className="space-y-2">
            {['any', 'direct', '1-stop'].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="stops"
                  value={option}
                  checked={filters.stops === option}
                  onChange={(e) => handleFilterChange('stops', e.target.value)}
                  className="text-blue-600"
                />
                <span className="capitalize">
                  {option === 'any' ? 'Any' : option}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Airlines</h3>
          <div className="space-y-2">
            {[
              'United Airlines',
              'British Airways',
              'Delta Airlines',
              'Air France',
            ].map((airline) => (
              <label key={airline} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.airlines.includes(airline)}
                  onChange={(e) => {
                    const newAirlines = e.target.checked
                      ? [...filters.airlines, airline]
                      : filters.airlines.filter((a) => a !== airline);
                    handleFilterChange('airlines', newAirlines);
                  }}
                  className="text-blue-600 rounded"
                />
                {airline}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Departure Time</h3>
          <div className="space-y-2">
            {[
              { label: 'Any Time', value: 'any' },
              { label: 'Morning (6AM-12PM)', value: 'morning' },
              { label: 'Afternoon (12PM-6PM)', value: 'afternoon' },
              { label: 'Evening (6PM-12AM)', value: 'evening' },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="departureTime"
                  value={option.value}
                  checked={filters.departureTime === option.value}
                  onChange={(e) =>
                    handleFilterChange('departureTime', e.target.value)
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
              maxPrice: 1000,
              stops: 'any',
              airlines: [],
              departureTime: 'any',
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