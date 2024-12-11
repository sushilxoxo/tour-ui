import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { useState } from 'react';

interface TransportSearchProps {
  onSearch: (searchParams: any) => void;
}

export function TransportSearch({ onSearch }: TransportSearchProps) {
  const [searchParams, setSearchParams] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: 2,
    hours: 4,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pickup Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              placeholder="Enter pickup location"
              value={searchParams.pickup}
              onChange={(e) =>
                setSearchParams({ ...searchParams, pickup: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dropoff Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              placeholder="Enter dropoff location"
              value={searchParams.dropoff}
              onChange={(e) =>
                setSearchParams({ ...searchParams, dropoff: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              value={searchParams.date}
              onChange={(e) =>
                setSearchParams({ ...searchParams, date: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="time"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              value={searchParams.time}
              onChange={(e) =>
                setSearchParams({ ...searchParams, time: e.target.value })
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
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Passenger' : 'Passengers'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration (hours)
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              value={searchParams.hours}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  hours: Number(e.target.value),
                })
              }
            >
              {[2, 4, 6, 8, 10, 12].map((num) => (
                <option key={num} value={num}>
                  {num} hours
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full md:w-auto">
        Search Vehicles
      </Button>
    </form>
  );
}