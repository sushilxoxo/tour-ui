import { Button } from '@/components/ui/button';
import { Calendar, Users } from 'lucide-react';

export function UserAnalytics() {
  const userMetrics = [
    {
      label: 'New Users',
      value: '1,245',
      change: '+12.5%',
      period: 'This month',
    },
    {
      label: 'Active Users',
      value: '24.5K',
      change: '+18.2%',
      period: 'Last 30 days',
    },
    {
      label: 'Retention Rate',
      value: '85%',
      change: '+5.3%',
      period: 'vs last month',
    },
  ];

  const userSegments = [
    { segment: 'Regular Travelers', percentage: 45 },
    { segment: 'Business Travelers', percentage: 25 },
    { segment: 'Luxury Seekers', percentage: 20 },
    { segment: 'Budget Travelers', percentage: 10 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold">User Analytics</h2>
        </div>
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          Last 30 Days
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {userMetrics.map((metric) => (
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
        <h3 className="text-sm font-medium text-gray-700 mb-4">User Segments</h3>
        <div className="space-y-4">
          {userSegments.map((segment) => (
            <div key={segment.segment}>
              <div className="flex justify-between text-sm mb-1">
                <span>{segment.segment}</span>
                <span className="font-medium">{segment.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${segment.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}