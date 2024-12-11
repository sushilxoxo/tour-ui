import { useState } from 'react';
import { TransportSearch } from '@/components/transportation/transport-search';
import { TransportList } from '@/components/transportation/transport-list';
import { TransportFilters } from '@/components/transportation/transport-filters';
import { Footer } from '@/components/layout/footer';

export function TransportationPage() {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchParams: any) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockTransport);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-8">Book Transportation</h1>
          <TransportSearch onSearch={handleSearch} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64">
            <TransportFilters
              onFilterChange={(filters) => console.log('Filters:', filters)}
            />
          </div>
          <div className="flex-1">
            <TransportList vehicles={searchResults} isLoading={isLoading} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const mockTransport = [
  {
    id: '1',
    type: 'Luxury Sedan',
    name: 'Mercedes-Benz S-Class',
    capacity: 4,
    luggage: 3,
    price: 120,
    perHour: true,
    rating: 4.9,
    reviews: 856,
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741',
    features: ['WiFi', 'Water', 'Child Seat Available', 'Professional Driver'],
    company: 'Premium Rides',
  },
  {
    id: '2',
    type: 'SUV',
    name: 'BMW X7',
    capacity: 6,
    luggage: 5,
    price: 150,
    perHour: true,
    rating: 4.8,
    reviews: 654,
    image: 'https://images.unsplash.com/photo-1670512216912-a61678aae424',
    features: ['WiFi', 'Water', 'Child Seat Available', 'Professional Driver', 'Extra Luggage Space'],
    company: 'Luxury Transfers',
  },
  {
    id: '3',
    type: 'Van',
    name: 'Mercedes-Benz V-Class',
    capacity: 8,
    luggage: 8,
    price: 180,
    perHour: true,
    rating: 4.7,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c',
    features: ['WiFi', 'Water', 'Child Seat Available', 'Professional Driver', 'Extra Luggage Space', 'Entertainment System'],
    company: 'Group Transfers',
  },
];