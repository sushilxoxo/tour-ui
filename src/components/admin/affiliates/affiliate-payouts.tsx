import { Button } from '@/components/ui/button';
import { Clock, DollarSign } from 'lucide-react';

interface Payout {
  id: string;
  affiliate: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  date: string;
  method: string;
}

export function AffiliatePayouts() {
  const payouts: Payout[] = [
    {
      id: '1',
      affiliate: 'Travel Explorers',
      amount: 4523,
      status: 'pending',
      date: '2024-03-20T10:00:00Z',
      method: 'Bank Transfer',
    },
    {
      id: '2',
      affiliate: 'Wanderlust Guide',
      amount: 3845,
      status: 'processing',
      date: '2024-03-20T09:30:00Z',
      method: 'PayPal',
    },
    {
      id: '3',
      affiliate: 'Adventure Seekers',
      amount: 2984,
      status: 'completed',
      date: '2024-03-19T15:00:00Z',
      method: 'Bank Transfer',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'processing':
        return 'text-yellow-600 bg-yellow-50';
      case 'failed':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Payouts</h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </div>

      <div className="divide-y">
        {payouts.map((payout) => (
          <div key={payout.id} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{payout.affiliate}</h3>
                    <p className="text-sm text-gray-600">{payout.method}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">${payout.amount}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {new Date(payout.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                  payout.status
                )}`}
              >
                {payout.status}
              </span>
              {payout.status === 'pending' && (
                <Button size="sm">Process Payout</Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}