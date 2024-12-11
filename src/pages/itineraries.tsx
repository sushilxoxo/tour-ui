import { SearchFilters } from '@/components/itineraries/search-filters';
import { ItineraryGrid } from '@/components/itineraries/itinerary-grid';
import { useState } from 'react';

// Temporary mock data - would be replaced with API calls
const MOCK_ITINERARIES = [
  {
    id: '1',
    title: 'Romantic Paris Getaway',
    description: 'Experience the magic of Paris with this carefully curated 5-day romantic itinerary.',
    destination: 'Paris, France',
    duration: 5,
    price: 2499,
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    creator: {
      name: 'Emily Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    tags: ['romantic', 'culture', 'food'],
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: '2',
    title: 'Japanese Culture Explorer',
    description: 'Immerse yourself in Japanese culture with this comprehensive 10-day journey.',
    destination: 'Tokyo, Japan',
    duration: 10,
    price: 3999,
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    creator: {
      name: 'Alex Wong',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    tags: ['culture', 'adventure', 'food'],
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: '3',
    title: 'Bali Adventure Escape',
    description: 'Discover the best of Bali with this action-packed 7-day adventure itinerary.',
    destination: 'Bali, Indonesia',
    duration: 7,
    price: 1899,
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    creator: {
      name: 'Sarah Miller',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    tags: ['adventure', 'nature', 'beach'],
    rating: 4.7,
    reviewCount: 156,
  },
];

export function ItinerariesPage() {
  const [filteredItineraries, setFilteredItineraries] = useState(MOCK_ITINERARIES);

  const handleSearch = (query: string) => {
    const filtered = MOCK_ITINERARIES.filter(
      (itinerary) =>
        itinerary.title.toLowerCase().includes(query.toLowerCase()) ||
        itinerary.destination.toLowerCase().includes(query.toLowerCase()) ||
        itinerary.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItineraries(filtered);
  };

  const handleFilterChange = (filters: any) => {
    let filtered = [...MOCK_ITINERARIES];

    if (filters.duration) {
      const [min, max] = filters.duration.split('-').map(Number);
      filtered = filtered.filter(
        (itinerary) =>
          itinerary.duration >= min && (max ? itinerary.duration <= max : true)
      );
    }

    if (filters.rating) {
      const minRating = parseInt(filters.rating);
      filtered = filtered.filter((itinerary) => itinerary.rating >= minRating);
    }

    setFilteredItineraries(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchFilters onSearch={handleSearch} onFilterChange={handleFilterChange} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Explore Itineraries</h1>
          <p className="text-gray-600">{filteredItineraries.length} itineraries found</p>
        </div>
        
        <ItineraryGrid itineraries={filteredItineraries} />
      </main>
    </div>
  );
}