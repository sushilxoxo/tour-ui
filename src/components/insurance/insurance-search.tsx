import { Button } from '@/components/ui/button';
import { Calendar, Globe, Users } from 'lucide-react';
import { useState } from 'react';

interface InsuranceSearchProps {
  onSearch: (searchParams: any) => void;
}

export function InsuranceSearch({ onSearch }: InsuranceSearchProps) {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1,
    tripCost: '',
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
            Destination
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              placeholder="Where are you traveling?"
              value={searchParams.destination}
              onChange={(e) =>
                setSearchParams({ ...searchParams, destination: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              value={searchParams.startDate}
              onChange={(e) =>
                setSearchParams({ ...searchParams, startDate: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              value={searchParams.endDate}
              onChange={(e) =>
                setSearchParams({ ...searchParams, endDate: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Travelers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="pl-10 w-full rounded-md border border-gray-300 p-2.5"
              value={searchParams.travelers}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  travelers: Number(e.target.value),
                })
              }
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Traveler' : 'Travelers'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Total Trip Cost
          </label>
          <input
            type="number"
            className="w-full rounded-md border border-gray-300 p-2.5"
            placeholder="Enter total trip cost"
            value={searchParams.tripCost}
            onChange={(e) =>
              setSearchParams({ ...searchParams, tripCost: e.target.value })
            }
          />
        </div>
      </div>

      <Button type="submit" className="w-full md:w-auto">
        Find Insurance Plans
      </Button>
    </form>
  );
}