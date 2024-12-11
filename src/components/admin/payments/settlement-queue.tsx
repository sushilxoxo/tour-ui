import { Button } from '@/components/ui/button';
import { Clock, DollarSign } from 'lucide-react';

interface Settlement {
  id: string;
  amount: number;
  recipient: string;
  type: string;
  status: 'pending' | 'processing' | 'completed';
  dueDate: string;
}

export function SettlementQueue() {
  const settlements: Settlement[] = [
    {
      id: '1',
      amount: 4523,
      recipient: 'Travel Explorers',
      type: 'Affiliate Payout',
      status: 'pending',
      dueDate: '2024-03-21T00:00:00Z',
    },
    {
      id: '2',
      amount: 2845,
      recipient: 'Hotel Partner XYZ',
      type: 'Supplier Payment',
      status: 'processing',
      dueDate: '2024-03-22T00:00:00Z',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'processing':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">Settlement Queue</h2>
      </div>

      <div className="divide-y">
        {settlements.map((settlement) => (
          <div key={settlement.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{settlement.recipient}</h3>
                  <p className="text-sm text-gray-600">{settlement.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">${settlement.amount}</p>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <Clock className="h-4 w-4" />
                  Due: {new Date(settlement.dueDate).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                  settlement.status
                )}`}
              >
                {settlement.status}
              </span>
              {settlement.status === 'pending' && (
                <Button size="sm">Process Settlement</Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}