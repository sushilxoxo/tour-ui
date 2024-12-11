import { useState } from 'react';
import { TransactionList } from '@/components/admin/payments/transaction-list';
import { PaymentStats } from '@/components/admin/payments/payment-stats';
import { PaymentChart } from '@/components/admin/payments/payment-chart';
import { SettlementQueue } from '@/components/admin/payments/settlement-queue';
import { PayoutSchedule } from '@/components/admin/payments/payout-schedule';

export function PaymentsPage() {
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Payments & Transactions</h1>
          <p className="text-gray-600">Manage financial transactions and payouts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PaymentStats />
            <PaymentChart />
            <TransactionList onSelectTransaction={setSelectedTransaction} selectedTransaction={selectedTransaction} />
          </div>
          <div className="space-y-8">
            <SettlementQueue />
            <PayoutSchedule />
          </div>
        </div>
      </div>
    </div>
  );
}