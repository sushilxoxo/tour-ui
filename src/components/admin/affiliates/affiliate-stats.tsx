import { DollarSign, TrendingUp, Users } from 'lucide-react';

export function AffiliateStats() {
  const stats = [
    {
      label: 'Total Affiliates',
      value: '234',
      change: '+12%',
      trend: 'up',
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: 'Monthly Revenue',
      value: '$45,230',
      change: '+8.2%',
      trend: 'up',
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      label: 'Conversion Rate',
      value: '12.4%',
      change: '+2.3%',
      trend: 'up',
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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