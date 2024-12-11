import { DollarSign, TrendingUp, Users, Globe } from 'lucide-react';

export function AdminStats() {
  const stats = [
    {
      label: 'Total Revenue',
      value: '$2.4M',
      change: '+12.5%',
      trend: 'up',
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      label: 'Active Users',
      value: '24.5K',
      change: '+18.2%',
      trend: 'up',
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: 'Bookings',
      value: '3,842',
      change: '+4.6%',
      trend: 'up',
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      label: 'Active Creators',
      value: '384',
      change: '+15.3%',
      trend: 'up',
      icon: <Globe className="h-5 w-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="text-blue-600">{stat.icon}</div>
            <div className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change}
            </div>
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