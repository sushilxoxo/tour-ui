import { DollarSign } from 'lucide-react';

export function RevenueMetrics() {
  const metrics = [
    {
      label: 'Gross Booking Value',
      value: '$1.2M',
      change: '+15%',
    },
    {
      label: 'Net Revenue',
      value: '$240K',
      change: '+12%',
    },
    {
      label: 'Affiliate Payouts',
      value: '$80K',
      change: '+18%',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Revenue Breakdown</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">{metric.label}</p>
            <p className="text-2xl font-bold mt-1">{metric.value}</p>
            <p className="text-sm text-green-600 mt-1">{metric.change} vs last month</p>
          </div>
        ))}
      </div>
    </div>
  );
}