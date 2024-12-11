import { Button } from '@/components/ui/button';
import { Search, Plus, Edit2, Eye, Trash2, Globe } from 'lucide-react';
import { useState } from 'react';

interface Itinerary {
  id: string;
  title: string;
  destination: string;
  status: 'published' | 'draft' | 'review';
  creator: string;
  lastUpdated: string;
  views: number;
  bookings: number;
}

interface ItineraryManagerProps {
  onSelect: (id: string) => void;
  selected: string | null;
}

export function ItineraryManager({ onSelect, selected }: ItineraryManagerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [itineraries] = useState<Itinerary[]>([
    {
      id: '1',
      title: 'Tokyo Cultural Experience',
      destination: 'Tokyo, Japan',
      status: 'published',
      creator: 'Emily Chen',
      lastUpdated: '2024-03-20T10:30:00Z',
      views: 1250,
      bookings: 45,
    },
    {
      id: '2',
      title: 'Paris Romance Package',
      destination: 'Paris, France',
      status: 'draft',
      creator: 'Sophie Martin',
      lastUpdated: '2024-03-19T15:45:00Z',
      views: 0,
      bookings: 0,
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'text-green-600 bg-green-50';
      case 'draft':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Itineraries</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search itineraries..."
                className="pl-10 rounded-md border border-gray-300 p-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Itinerary
            </Button>
          </div>
        </div>
      </div>

      <div className="divide-y">
        {itineraries.map((itinerary) => (
          <div
            key={itinerary.id}
            className={`p-6 hover:bg-gray-50 ${
              selected === itinerary.id ? 'bg-blue-50' : ''
            }`}
            onClick={() => onSelect(itinerary.id)}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium">{itinerary.title}</h3>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                      itinerary.status
                    )}`}
                  >
                    {itinerary.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    {itinerary.destination}
                  </div>
                  <span>By {itinerary.creator}</span>
                  <span>
                    Updated {new Date(itinerary.lastUpdated).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Edit2 className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>

            {itinerary.status === 'published' && (
              <div className="mt-4 flex items-center gap-8 text-sm text-gray-600">
                <div>
                  <span className="font-medium">{itinerary.views.toLocaleString()}</span> views
                </div>
                <div>
                  <span className="font-medium">{itinerary.bookings.toLocaleString()}</span> bookings
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}