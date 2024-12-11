import { Button } from '@/components/ui/button';
import { Building2, Calendar, MapPin, Users } from 'lucide-react';
import { useState } from 'react';

interface HotelSearchProps {
  onSearch: (searchParams: any) => void;
}

export function HotelSearch({ onSearch }: HotelSearchProps) {
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              placeholder="Where are you going?"
              value={searchParams.location}
              onChange={(e) =>
                setSearchParams({ ...searchParams, location: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-in
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              value={searchParams.checkIn}
              onChange={(e) =>
                setSearchParams({ ...searchParams, checkIn: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-out
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              value={searchParams.checkOut}
              onChange={(e) =>
                setSearchParams({ ...searchParams, checkOut: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Guests & Rooms
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
                value={searchParams.guests}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    guests: Number(e.target.value),
                  })
                }
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative flex-1">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
                value={searchParams.rooms}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    rooms: Number(e.target.value),
                  })
                }
              >
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Room' : 'Rooms'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full md:w-auto">
        Search Hotels
      </Button>
    </form>
  );
}