import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Star, TrendingUp } from 'lucide-react';

interface Affiliate {
  id: string;
  name: string;
  website: string;
  revenue: number;
  bookings: number;
  commission: number;
  status: 'active' | 'suspended' | 'pending';
  performance: 'excellent' | 'good' | 'average' | 'poor';
}

export function AffiliateList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [affiliates] = useState<Affiliate[]>([
    {
      id: '1',
      name: 'Travel Explorers',
      website: 'travelexplorers.com',
      revenue: 45230,
      bookings: 156,
      commission: 15,
      status: 'active',
      performance: 'excellent',
    },
    {
      id: '2',
      name: 'Wanderlust Guide',
      website: 'wanderlustguide.com',
      revenue: 38450,
      bookings: 132,
      commission: 12,
      status: 'active',
      performance: 'good',
    },
    {
      id: '3',
      name: 'Adventure Seekers',
      website: 'adventureseekers.com',
      revenue: 29840,
      bookings: 98,
      commission: 10,
      status: 'suspended',
      performance: 'poor',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50';
      case 'suspended':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-yellow-600 bg-yellow-50';
    }
  };

  const getPerformanceIcon = (performance: string) => {
    switch (performance) {
      case 'excellent':
        return <Star className="h-4 w-4 text-yellow-400 fill-current" />;
      case 'good':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      default:
        return <TrendingUp className="h-4 w-4 text-gray-400" />;
    }
  };

  const filteredAffiliates = affiliates.filter(
    (affiliate) =>
      affiliate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      affiliate.website.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Active Affiliates</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search affiliates..."
              className="pl-10 rounded-md border border-gray-300 p-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="px-6 py-4 font-medium">Affiliate</th>
              <th className="px-6 py-4 font-medium">Revenue</th>
              <th className="px-6 py-4 font-medium">Bookings</th>
              <th className="px-6 py-4 font-medium">Commission</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Performance</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredAffiliates.map((affiliate) => (
              <tr key={affiliate.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium">{affiliate.name}</div>
                    <div className="text-sm text-gray-500">{affiliate.website}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  ${affiliate.revenue.toLocaleString()}
                </td>
                <td className="px-6 py-4">{affiliate.bookings}</td>
                <td className="px-6 py-4">{affiliate.commission}%</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                      affiliate.status
                    )}`}
                  >
                    {affiliate.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    {getPerformanceIcon(affiliate.performance)}
                    <span className="capitalize">{affiliate.performance}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={
                        affiliate.status === 'active'
                          ? 'text-red-600 hover:text-red-700'
                          : 'text-green-600 hover:text-green-700'
                      }
                    >
                      {affiliate.status === 'active' ? 'Suspend' : 'Activate'}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}