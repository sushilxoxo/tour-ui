import { BookOpen, MessageSquare, PenTool, TrendingUp } from 'lucide-react';

export function ContentStats() {
  const stats = [
    {
      label: 'Active Itineraries',
      value: '156',
      change: '+12',
      trend: 'up',
      icon: <PenTool className="h-5 w-5" />,
    },
    {
      label: 'Blog Posts',
      value: '45',
      change: '+3',
      trend: 'up',
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      label: 'Chatbot Responses',
      value: '1.2K',
      change: '+8%',
      trend: 'up',
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      label: 'Content Views',
      value: '45.2K',
      change: '+15%',
      trend: 'up',
      icon: <TrendingUp className="h-5 w-5" />,
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