import { Button } from '@/components/ui/button';
import { Search, CreditCard, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface Transaction {
  id: string;
  type: 'booking' | 'refund' | 'payout';
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  customer: {
    name: string;
    email: string;
  };
  paymentMethod: string;
  timestamp: string;
  reference: string;
}

interface TransactionListProps {
  onSelectTransaction: (id: string) => void;
  selectedTransaction: string | null;
}

export function TransactionList({ onSelectTransaction, selectedTransaction }: TransactionListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      type: 'booking',
      amount: 2499,
      status: 'completed',
      customer: {
        name: 'John Smith',
        email: 'john.smith@example.com',
      },
      paymentMethod: 'Visa •••• 4242',
      timestamp: '2024-03-20T10:30:00Z',
      reference: 'TRX-123456',
    },
    {
      id: '2',
      type: 'refund',
      amount: -850,
      status: 'pending',
      customer: {
        name: 'Sarah Johnson',
        email: 'sarah.j@example.com',
      },
      paymentMethod: 'Original Payment Method',
      timestamp: '2024-03-20T09:15:00Z',
      reference: 'REF-789012',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-red-600 bg-red-50';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'booking':
        return 'text-blue-600 bg-blue-50';
      case 'refund':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-purple-600 bg-purple-50';
    }
  };

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="pl-10 rounded-md border border-gray-300 p-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="divide-y">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`p-6 hover:bg-gray-50 cursor-pointer ${
              selectedTransaction === transaction.id ? 'bg-blue-50' : ''
            }`}
            onClick={() => onSelectTransaction(transaction.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${getTypeColor(transaction.type)}`}>
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{transaction.reference}</h3>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                        transaction.status
                      )}`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {transaction.customer.name} ({transaction.customer.email})
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {transaction.paymentMethod}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-lg font-bold ${
                  transaction.type === 'refund' ? 'text-red-600' : 'text-gray-900'
                }`}>
                  {transaction.type === 'refund' ? '-' : ''}${Math.abs(transaction.amount)}
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <Clock className="h-4 w-4" />
                  {new Date(transaction.timestamp).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}