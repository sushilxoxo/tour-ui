import { DollarSign, TrendingUp, CreditCard, AlertCircle } from 'lucide-react';

export function PaymentStats() {
  const stats = [
    {
      label: 'Total Revenue',
      value: '$245,678',
      change: '+12.5%',
      trend: 'up',
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      label: 'Processing Volume',
      value: '$45,230',
      change: '+8.2%',
      trend: 'up',
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      label: 'Success Rate',
      value: '98.5%',
      change: '+0.5%',
      trend: 'up',
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      label: 'Failed Transactions',
      value: '1.5%',
      change: '-0.3%',
      trend: 'down',
      icon: <AlertCircle className="h-5 w-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="text-blue-600">{stat.icon}</div>
            <div className={`text-sm ${
              stat.trend === 'up' 
                ? stat.label === 'Failed Transactions' 
                  ? 'text-red-600' 
                  : 'text-green-600'
                : stat.label === 'Failed Transactions'
                ? 'text-green-600'
                : 'text-red-600'
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