import { Users, Globe, TrendingUp, DollarSign } from 'lucide-react';

export function CreatorStats() {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: '10,000+',
      label: 'Active Creators',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: '150+',
      label: 'Destinations',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: '95%',
      label: 'Booking Rate',
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      value: '$2M+',
      label: 'Creator Earnings',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="text-blue-600 mb-4">{stat.icon}</div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-600 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}