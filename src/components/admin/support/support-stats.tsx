import { Clock, MessageCircle, ThumbsUp, Users } from 'lucide-react';

export function SupportStats() {
  const stats = [
    {
      label: 'Open Tickets',
      value: '24',
      change: '-8%',
      trend: 'down',
      icon: <MessageCircle className="h-5 w-5" />,
    },
    {
      label: 'Avg Response Time',
      value: '15m',
      change: '-25%',
      trend: 'down',
      icon: <Clock className="h-5 w-5" />,
    },
    {
      label: 'Active Agents',
      value: '12',
      change: '+2',
      trend: 'up',
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: 'Satisfaction Rate',
      value: '95%',
      change: '+2%',
      trend: 'up',
      icon: <ThumbsUp className="h-5 w-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="text-blue-600">{stat.icon}</div>
            <div className={`text-sm ${
              stat.trend === 'up' ? 'text-green-600' : 'text-blue-600'
            }`}>
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