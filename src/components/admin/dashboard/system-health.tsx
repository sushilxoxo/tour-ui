import { Activity, Server, Wifi } from 'lucide-react';

export function SystemHealth() {
  const metrics = [
    {
      name: 'API Latency',
      value: '45ms',
      status: 'normal',
      icon: <Activity className="h-5 w-5" />,
    },
    {
      name: 'Server Load',
      value: '68%',
      status: 'warning',
      icon: <Server className="h-5 w-5" />,
    },
    {
      name: 'Uptime',
      value: '99.99%',
      status: 'normal',
      icon: <Wifi className="h-5 w-5" />,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">System Health</h2>
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`text-${metric.status === 'normal' ? 'blue' : 'yellow'}-600`}>
                {metric.icon}
              </div>
              <span className="font-medium">{metric.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{metric.value}</span>
              <div
                className={`w-2 h-2 rounded-full ${
                  metric.status === 'normal' ? 'bg-green-500' : 'bg-yellow-500'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}