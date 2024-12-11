import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: string;
  sender: 'agent' | 'customer';
  content: string;
  timestamp: string;
}

interface SupportChatProps {
  ticketId: string;
}

export function SupportChat({ ticketId }: SupportChatProps) {
  const [message, setMessage] = useState('');
  const [messages] = useState<Message[]>([
    {
      id: '1',
      sender: 'customer',
      content: 'Hi, I need to cancel my flight booking due to an emergency.',
      timestamp: '2024-03-20T10:30:00Z',
    },
    {
      id: '2',
      sender: 'agent',
      content: 'I understand. I can help you with that. Could you please confirm your booking reference number?',
      timestamp: '2024-03-20T10:31:00Z',
    },
    {
      id: '3',
      sender: 'customer',
      content: 'Yes, it\'s B123. The flight is for March 25th.',
      timestamp: '2024-03-20T10:32:00Z',
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Add message handling logic here
    setMessage('');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">Ticket Chat</h2>
      </div>

      <div className="h-[400px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.sender === 'agent'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <p className="text-xs mt-1 opacity-70">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 rounded-md border border-gray-300 p-2 text-sm"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}