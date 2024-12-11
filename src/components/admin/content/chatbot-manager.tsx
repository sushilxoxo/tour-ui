import { Button } from '@/components/ui/button';
import { MessageSquare, Plus, Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface ChatbotResponse {
  id: string;
  trigger: string;
  response: string;
  category: string;
  lastUpdated: string;
  usageCount: number;
  effectiveness: number;
}

export function ChatbotManager() {
  const [responses] = useState<ChatbotResponse[]>([
    {
      id: '1',
      trigger: 'booking_cancellation',
      response: 'I understand you want to cancel your booking. I can help you with that. Could you please provide your booking reference number?',
      category: 'Booking Support',
      lastUpdated: '2024-03-20T10:30:00Z',
      usageCount: 245,
      effectiveness: 92,
    },
    {
      id: '2',
      trigger: 'itinerary_recommendation',
      response: 'I\'d be happy to help you find the perfect itinerary. Could you tell me your preferred destination and travel dates?',
      category: 'Recommendations',
      lastUpdated: '2024-03-19T15:45:00Z',
      usageCount: 567,
      effectiveness: 88,
    },
  ]);

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Chatbot Responses</h2>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Response
          </Button>
        </div>
      </div>

      <div className="divide-y">
        {responses.map((response) => (
          <div key={response.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{response.trigger}</h3>
                  <p className="text-sm text-gray-600 mt-1">{response.response}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span>{response.category}</span>
                    <span>
                      Updated {new Date(response.lastUpdated).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Edit2 className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Usage Count</p>
                <p className="text-lg font-semibold">
                  {response.usageCount.toLocaleString()}
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Effectiveness</p>
                <p className="text-lg font-semibold">{response.effectiveness}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}