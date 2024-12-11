import { Button } from '@/components/ui/button';
import { Search, AlertCircle, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface SupportTicket {
  id: string;
  subject: string;
  customer: {
    name: string;
    email: string;
  };
  booking?: {
    id: string;
    type: string;
    details: string;
  };
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
  lastUpdate: string;
  messages: number;
}

interface SupportTicketsProps {
  onSelectTicket: (ticketId: string) => void;
  selectedTicket: string | null;
}

export function SupportTickets({ onSelectTicket, selectedTicket }: SupportTicketsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [tickets] = useState<SupportTicket[]>([
    {
      id: '1',
      subject: 'Flight Cancellation Request',
      customer: {
        name: 'John Smith',
        email: 'john.smith@example.com',
      },
      booking: {
        id: 'B123',
        type: 'Flight',
        details: 'Paris to London - Mar 25',
      },
      status: 'open',
      priority: 'high',
      category: 'Cancellation',
      lastUpdate: '2024-03-20T10:30:00Z',
      messages: 3,
    },
    {
      id: '2',
      subject: 'Hotel Booking Modification',
      customer: {
        name: 'Sarah Johnson',
        email: 'sarah.j@example.com',
      },
      booking: {
        id: 'B124',
        type: 'Hotel',
        details: 'Grand Plaza Hotel - Apr 15-20',
      },
      status: 'in_progress',
      priority: 'medium',
      category: 'Modification',
      lastUpdate: '2024-03-20T09:15:00Z',
      messages: 5,
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'text-yellow-600 bg-yellow-50';
      case 'in_progress':
        return 'text-blue-600 bg-blue-50';
      case 'resolved':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'text-red-600 bg-red-50';
      case 'high':
        return 'text-orange-600 bg-orange-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-blue-600 bg-blue-50';
    }
  };

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Support Tickets</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search tickets..."
              className="pl-10 rounded-md border border-gray-300 p-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="divide-y">
        {filteredTickets.map((ticket) => (
          <div
            key={ticket.id}
            className={`p-6 hover:bg-gray-50 cursor-pointer ${
              selectedTicket === ticket.id ? 'bg-blue-50' : ''
            }`}
            onClick={() => onSelectTicket(ticket.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${getPriorityColor(ticket.priority)}`}>
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">{ticket.subject}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {ticket.customer.name} ({ticket.customer.email})
                  </p>
                  {ticket.booking && (
                    <div className="mt-2 text-sm">
                      <span className="text-gray-600">Booking: </span>
                      <span className="font-medium">
                        {ticket.booking.type} - {ticket.booking.details}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                    ticket.status
                  )}`}
                >
                  {ticket.status.replace('_', ' ')}
                </span>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    {ticket.messages}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {new Date(ticket.lastUpdate).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}