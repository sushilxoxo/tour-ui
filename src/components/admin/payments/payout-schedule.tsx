import { Button } from '@/components/ui/button';
import { Calendar, DollarSign } from 'lucide-react';

interface ScheduledPayout {
  id: string;
  type: string;
  amount: number;
  recipients: number;
  date: string;
}

export function PayoutSchedule() {
  const payouts: ScheduledPayout[] = [
    {
      id: '1',
      type: 'Affiliate Commissions',
      amount: 45230,
      recipients: 12,
      date: '2024-03-25T00:00:00Z',
    },
    {
      id: '2',
      type: 'Supplier Settlements',
      amount: 128450,
      recipients: 8,
      date: '2024-03-28T00:00:00Z',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Upcoming Payouts</h2>
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule New
          </Button>
        </div>
      </div>

      <div className="divide-y">
        {payouts.map((payout) => (
          <div key={payout.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{payout.type}</h3>
                  <p className="text-sm text-gray-600">
                    {payout.recipients} recipients
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">${payout.amount.toLocaleString()}</p>
                <p className="text-sm text-gray-600">
                  {new Date(payout.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" size="sm">
                View Details
              </Button>
              <Button size="sm">Process Early</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}