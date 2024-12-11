import { BarChart2, Target, Users, Zap } from 'lucide-react';

export function MarketingStats() {
  const stats = [
    {
      label: 'Active Campaigns',
      value: '12',
      change: '+3',
      trend: 'up',
      icon: <Zap className="h-5 w-5" />,
    },
    {
      label: 'Email CTR',
      value: '24.5%',
      change: '+2.3%',
      trend: 'up',
      icon: <Target className="h-5 w-5" />,
    },
    {
      label: 'User Segments',
      value: '18',
      change: '+5',
      trend: 'up',
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: 'Conversion Rate',
      value: '3.2%',
      change: '+0.5%',
      trend: 'up',
      icon: <BarChart2 className="h-5 w-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="text-blue-600">{stat.icon}</div>
            <div className="text-sm text-green-600">{stat.change}</div>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}