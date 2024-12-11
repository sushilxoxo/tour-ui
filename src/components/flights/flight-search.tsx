import { Button } from '@/components/ui/button';
import { Plane, Calendar, Users } from 'lucide-react';
import { useState } from 'react';

interface FlightSearchProps {
  onSearch: (searchParams: any) => void;
}

export function FlightSearch({ onSearch }: FlightSearchProps) {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: 1,
    class: 'economy',
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
            From
          </label>
          <div className="relative">
            <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              placeholder="Departure city"
              value={searchParams.from}
              onChange={(e) =>
                setSearchParams({ ...searchParams, from: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <div className="relative">
            <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              placeholder="Arrival city"
              value={searchParams.to}
              onChange={(e) =>
                setSearchParams({ ...searchParams, to: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dates
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              value={searchParams.departDate}
              onChange={(e) =>
                setSearchParams({ ...searchParams, departDate: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Passengers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              value={searchParams.passengers}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  passengers: Number(e.target.value),
                })
              }
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Passenger' : 'Passengers'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="class"
              value="economy"
              checked={searchParams.class === 'economy'}
              onChange={(e) =>
                setSearchParams({ ...searchParams, class: e.target.value })
              }
              className="text-blue-600"
            />
            Economy
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="class"
              value="business"
              checked={searchParams.class === 'business'}
              onChange={(e) =>
                setSearchParams({ ...searchParams, class: e.target.value })
              }
              className="text-blue-600"
            />
            Business
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="class"
              value="first"
              checked={searchParams.class === 'first'}
              onChange={(e) =>
                setSearchParams({ ...searchParams, class: e.target.value })
              }
              className="text-blue-600"
            />
            First Class
          </label>
        </div>
        <Button type="submit" className="ml-auto">
          Search Flights
        </Button>
      </div>
    </form>
  );
}