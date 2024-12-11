import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface InsuranceFiltersProps {
  onFilterChange: (filters: any) => void;
}

export function InsuranceFilters({ onFilterChange }: InsuranceFiltersProps) {
  const [filters, setFilters] = useState({
    priceRange: [0, 200],
    coverageTypes: [] as string[],
    providers: [] as string[],
    rating: 'any',
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
          <h3 className="font-medium mb-4">Coverage Types</h3>
          <div className="space-y-2">
            {[
              'Medical Coverage',
              'Trip Cancellation',
              'Baggage Loss',
              'Travel Delay',
              'Adventure Sports',
              'Pre-existing Conditions',
            ].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.coverageTypes.includes(type)}
                  onChange={(e) => {
                    const newTypes = e.target.checked
                      ? [...filters.coverageTypes, type]
                      : filters.coverageTypes.filter((t) => t !== type);
                    handleFilterChange('coverageTypes', newTypes);
                  }}
                  className="text-blue-600 rounded"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Insurance Providers</h3>
          <div className="space-y-2">
            {[
              'Global Insurance Co.',
              'Travel Guard',
              'World Nomads',
              'Allianz',
              'AXA',
            ].map((provider) => (
              <label key={provider} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.providers.includes(provider)}
                  onChange={(e) => {
                    const newProviders = e.target.checked
                      ? [...filters.providers, provider]
                      : filters.providers.filter((p) => p !== provider);
                    handleFilterChange('providers', newProviders);
                  }}
                  className="text-blue-600 rounded"
                />
                {provider}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Rating</h3>
          <div className="space-y-2">
            {[
              { label: 'Any Rating', value: 'any' },
              { label: '4.5+ Stars', value: '4.5' },
              { label: '4.0+ Stars', value: '4.0' },
              { label: '3.5+ Stars', value: '3.5' },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rating"
                  value={option.value}
                  checked={filters.rating === option.value}
                  onChange={(e) =>
                    handleFilterChange('rating', e.target.value)
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
              coverageTypes: [],
              providers: [],
              rating: 'any',
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