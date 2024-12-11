import { Button } from '@/components/ui/button';
import { Calendar, DollarSign, TrendingUp } from 'lucide-react';

export function AffiliateCharts() {
  const performanceMetrics = [
    {
      label: 'Total Affiliate Revenue',
      value: '$245,678',
      change: '+22.5%',
      period: 'This month',
    },
    {
      label: 'Average Commission',
      value: '$1,245',
      change: '+15.2%',
      period: 'Per affiliate',
    },
    {
      label: 'New Affiliates',
      value: '34',
      change: '+8.3%',
      period: 'This month',
    },
  ];

  const topPerformers = [
    { name: 'Travel Explorers', revenue: 45230, growth: 22 },
    { name: 'Wanderlust Guide', revenue: 38450, growth: 18 },
    { name: 'Adventure Seekers', revenue: 29840, growth: 15 },
    { name: 'Global Nomads', revenue: 25670, growth: 12 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold">Affiliate Performance Charts</h2>
        </div>
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          Last 30 Days
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {performanceMetrics.map((metric) => (
          <div key={metric.label} className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">{metric.label}</p>
            <p className="text-2xl font-bold mt-1">{metric.value}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-green-600">{metric.change}</span>
              <span className="text-sm text-gray-500">{metric.period}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Top Performers Growth</h3>
        <div className="space-y-4">
          {topPerformers.map((performer) => (
            <div key={performer.name} className="flex items-center gap-4">
              <div className="w-32 truncate">{performer.name}</div>
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>${performer.revenue.toLocaleString()}</span>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {performer.growth}%
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(performer.revenue / 45230) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}