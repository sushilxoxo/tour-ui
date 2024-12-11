import { Button } from '@/components/ui/button';
import { MessageCircle, Send, X, Compass } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hi! I\'m your travel assistant. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(message),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('book') || lowerMessage.includes('reservation')) {
      return 'I can help you with booking! Would you like to see our available itineraries?';
    }
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return 'Our itineraries range from $500 to $5000 per person. What\'s your budget range?';
    }
    if (lowerMessage.includes('cancel')) {
      return 'For cancellations, please contact our support team at support@travelgo.com or use the cancellation form in your booking dashboard.';
    }
    return 'I\'m here to help! You can ask me about bookings, itineraries, prices, or any other travel-related questions.';
  };

  const quickResponses = [
    'How do I book an itinerary?',
    'What\'s your cancellation policy?',
    'Can you help me find a trip?',
    'What are your price ranges?',
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[600px] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b flex items-center justify-between bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Compass className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">TravelGo Assistant</h3>
                <p className="text-xs text-blue-100">Online</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.type === 'bot' && (
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <Compass className="h-5 w-5 text-blue-600" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex flex-wrap gap-2">
              {quickResponses.map((response) => (
                <button
                  key={response}
                  className="text-sm bg-white border rounded-full px-3 py-1 hover:bg-gray-100"
                  onClick={() => setMessage(response)}
                >
                  {response}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 rounded-md border border-gray-300 p-2 text-sm"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button type="submit" size="sm">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}