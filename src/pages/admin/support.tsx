import { useState } from 'react';
import { SupportTickets } from '@/components/admin/support/support-tickets';
import { SupportStats } from '@/components/admin/support/support-stats';
import { SupportQueue } from '@/components/admin/support/support-queue';
import { SupportChat } from '@/components/admin/support/support-chat';

export function SupportPage() {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Customer Support</h1>
          <p className="text-gray-600">Manage customer inquiries and support tickets</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <SupportStats />
            <SupportTickets onSelectTicket={setSelectedTicket} selectedTicket={selectedTicket} />
          </div>
          <div className="space-y-8">
            <SupportQueue />
            {selectedTicket && <SupportChat ticketId={selectedTicket} />}
          </div>
        </div>
      </div>
    </div>
  );
}