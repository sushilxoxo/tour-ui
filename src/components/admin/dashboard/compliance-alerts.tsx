import { AlertCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ComplianceAlerts() {
  const alerts = [
    {
      type: 'Suspicious Activity',
      description: 'Multiple failed login attempts from IP 192.168.1.1',
      severity: 'high',
      time: '5 minutes ago',
    },
    {
      type: 'Unusual Booking Pattern',
      description: 'Large volume of bookings from single user',
      severity: 'medium',
      time: '1 hour ago',
    },
    {
      type: 'Payment Anomaly',
      description: 'Multiple declined transactions from same card',
      severity: 'high',
      time: '2 hours ago',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold">Compliance Alerts</h2>
        </div>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              alert.severity === 'high' ? 'bg-red-50' : 'bg-yellow-50'
            }`}
          >
            <div className="flex items-start gap-3">
              <AlertCircle className={`h-5 w-5 ${
                alert.severity === 'high' ? 'text-red-600' : 'text-yellow-600'
              }`} />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{alert.type}</h3>
                  <span className="text-sm text-gray-500">{alert.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}