import { useState } from 'react';
import { InsuranceSearch } from '@/components/insurance/insurance-search';
import { InsuranceList } from '@/components/insurance/insurance-list';
import { InsuranceFilters } from '@/components/insurance/insurance-filters';
import { Footer } from '@/components/layout/footer';

export function InsurancePage() {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchParams: any) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockInsurance);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-8">Travel Insurance</h1>
          <p className="text-xl text-blue-100 mb-8">Protect your journey with comprehensive coverage</p>
          <InsuranceSearch onSearch={handleSearch} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64">
            <InsuranceFilters
              onFilterChange={(filters) => console.log('Filters:', filters)}
            />
          </div>
          <div className="flex-1">
            <InsuranceList plans={searchResults} isLoading={isLoading} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const mockInsurance = [
  {
    id: '1',
    name: 'Essential Coverage',
    provider: 'Global Insurance Co.',
    price: 49,
    coverage: {
      medical: 50000,
      cancellation: 2500,
      baggage: 1000,
      delay: 500,
    },
    features: [
      'Emergency Medical Coverage',
      'Trip Cancellation',
      'Lost Baggage Protection',
      '24/7 Assistance',
    ],
    rating: 4.8,
    reviews: 1250,
    recommended: true,
  },
  {
    id: '2',
    name: 'Premium Protection',
    provider: 'Travel Guard',
    price: 89,
    coverage: {
      medical: 100000,
      cancellation: 5000,
      baggage: 2000,
      delay: 1000,
    },
    features: [
      'Comprehensive Medical Coverage',
      'Trip Cancellation & Interruption',
      'Lost Baggage & Personal Effects',
      'Travel Delay Coverage',
      'Adventure Sports Coverage',
      'Pre-existing Conditions Coverage',
    ],
    rating: 4.9,
    reviews: 856,
    recommended: false,
  },
  {
    id: '3',
    name: 'Ultimate Coverage',
    provider: 'World Nomads',
    price: 129,
    coverage: {
      medical: 250000,
      cancellation: 10000,
      baggage: 3000,
      delay: 1500,
    },
    features: [
      'Extensive Medical Coverage',
      'Cancel for Any Reason',
      'Premium Baggage Protection',
      'Extended Delay Coverage',
      'Adventure Activities',
      'Rental Car Coverage',
      'Business Equipment Coverage',
    ],
    rating: 4.7,
    reviews: 623,
    recommended: false,
  },
];