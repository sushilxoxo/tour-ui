import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HotelSearch } from '@/components/hotels/hotel-search';
import { HotelList } from '@/components/hotels/hotel-list';
import { HotelFilters } from '@/components/hotels/hotel-filters';
import { Footer } from '@/components/layout/footer';

export function HotelsPage() {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchParams: any) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockHotels);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-8">Find Your Perfect Stay</h1>
          <HotelSearch onSearch={handleSearch} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64">
            <HotelFilters
              onFilterChange={(filters) => console.log('Filters:', filters)}
            />
          </div>
          <div className="flex-1">
            <HotelList hotels={searchResults} isLoading={isLoading} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const mockHotels = [
  {
    id: '1',
    name: 'Grand Plaza Hotel',
    location: 'Paris, France',
    rating: 4.8,
    reviews: 1250,
    price: 299,
    perNight: true,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant'],
    stars: 5,
    type: 'Luxury',
  },
  {
    id: '2',
    name: 'Riverside Inn',
    location: 'Paris, France',
    rating: 4.5,
    reviews: 850,
    price: 199,
    perNight: true,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    amenities: ['Free WiFi', 'Restaurant', 'Bar'],
    stars: 4,
    type: 'Boutique',
  },
  {
    id: '3',
    name: 'City View Apartments',
    location: 'Paris, France',
    rating: 4.6,
    reviews: 620,
    price: 159,
    perNight: true,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    amenities: ['Kitchen', 'Free WiFi', 'Washer'],
    stars: 4,
    type: 'Apartment',
  },
];