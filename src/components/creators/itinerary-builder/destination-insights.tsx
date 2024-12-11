import { BarChart, Globe, Users } from 'lucide-react';

interface Insight {
  label: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
}

export function DestinationInsights() {
  const insights: Insight[] = [
    {
      label: 'Average Stay',
      value: '4.5 days',
      icon: <Globe className="h-5 w-5" />,
      change: '+0.5 days vs. last month',
    },
    {
      label: 'Popular Season',
      value: 'Jun-Aug',
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      label: 'Group Size',
      value: '2-4 people',
      icon: <Users className="h-5 w-5" />,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-medium mb-4">Destination Insights</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((insight) => (
          <div
            key={insight.label}
            className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="text-blue-600">{insight.icon}</div>
              <span className="text-sm text-gray-600">{insight.label}</span>
            </div>
            <p className="text-lg font-semibold">{insight.value}</p>
            {insight.change && (
              <p className="text-sm text-green-600 mt-1">{insight.change}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}