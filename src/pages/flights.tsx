import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FlightSearch } from '@/components/flights/flight-search';
import { FlightList } from '@/components/flights/flight-list';
import { FlightFilters } from '@/components/flights/flight-filters';
import { Footer } from '@/components/layout/footer';

export function FlightsPage() {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchParams: any) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockFlights);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-8">Find Your Flight</h1>
          <FlightSearch onSearch={handleSearch} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64">
            <FlightFilters
              onFilterChange={(filters) => console.log('Filters:', filters)}
            />
          </div>
          <div className="flex-1">
            <FlightList flights={searchResults} isLoading={isLoading} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const mockFlights = [
  {
    id: '1',
    airline: 'United Airlines',
    flightNumber: 'UA123',
    departure: {
      city: 'New York',
      airport: 'JFK',
      time: '08:00',
      date: '2024-04-15',
    },
    arrival: {
      city: 'London',
      airport: 'LHR',
      time: '20:00',
      date: '2024-04-15',
    },
    duration: '7h 00m',
    stops: 0,
    price: 599,
    seatsAvailable: 12,
  },
  {
    id: '2',
    airline: 'British Airways',
    flightNumber: 'BA456',
    departure: {
      city: 'New York',
      airport: 'JFK',
      time: '10:30',
      date: '2024-04-15',
    },
    arrival: {
      city: 'London',
      airport: 'LHR',
      time: '22:30',
      date: '2024-04-15',
    },
    duration: '7h 00m',
    stops: 0,
    price: 649,
    seatsAvailable: 8,
  },
  {
    id: '3',
    airline: 'Delta Airlines',
    flightNumber: 'DL789',
    departure: {
      city: 'New York',
      airport: 'JFK',
      time: '14:15',
      date: '2024-04-15',
    },
    arrival: {
      city: 'London',
      airport: 'LHR',
      time: '02:15',
      date: '2024-04-16',
    },
    duration: '7h 00m',
    stops: 1,
    stopover: 'Boston',
    price: 499,
    seatsAvailable: 15,
  },
];