import { Users, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AffiliateMetrics() {
  const metrics = [
    {
      label: 'Top Affiliate',
      name: 'Travel Explorers',
      value: '$45,230',
      change: '+22%',
    },
    {
      label: 'Active Affiliates',
      value: '234',
      change: '+15%',
    },
    {
      label: 'Conversion Rate',
      value: '12.4%',
      change: '+3.2%',
    },
  ];

  const topAffiliates = [
    {
      name: 'Travel Explorers',
      bookings: 156,
      revenue: 45230,
      conversion: 15.2,
    },
    {
      name: 'Wanderlust Guide',
      bookings: 132,
      revenue: 38450,
      conversion: 14.8,
    },
    {
      name: 'Adventure Seekers',
      bookings: 98,
      revenue: 29840,
      conversion: 13.5,
    },
    {
      name: 'Global Nomads',
      bookings: 87,
      revenue: 25670,
      conversion: 12.9,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold">Affiliate Performance</h2>
        </div>
        <Button variant="outline" size="sm">View All</Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">{metric.label}</p>
            <div className="mt-1">
              {metric.name && (
                <p className="text-sm font-medium text-gray-900">{metric.name}</p>
              )}
              <p className="text-xl font-bold">{metric.value}</p>
              <p className="text-sm text-green-600">{metric.change} vs last month</p>
            </div>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-3 font-medium">Affiliate</th>
              <th className="pb-3 font-medium">Bookings</th>
              <th className="pb-3 font-medium">Revenue</th>
              <th className="pb-3 font-medium">Conversion</th>
              <th className="pb-3 font-medium">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {topAffiliates.map((affiliate) => (
              <tr key={affiliate.name} className="text-sm">
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    {affiliate.name === 'Travel Explorers' && (
                      <Award className="h-4 w-4 text-yellow-400" />
                    )}
                    <span className="font-medium">{affiliate.name}</span>
                  </div>
                </td>
                <td className="py-3">{affiliate.bookings}</td>
                <td className="py-3">${affiliate.revenue.toLocaleString()}</td>
                <td className="py-3">{affiliate.conversion}%</td>
                <td className="py-3">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}