import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AiAssistant({ isOpen, onClose }: AiAssistantProps) {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: 'Hi! I\'m your AI travel assistant. I can help you create detailed itineraries, suggest activities, and optimize your content. How can I help you today?',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    // Add user message
    setMessages([...messages, { role: 'user', content: prompt }]);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'This is a simulated response. In the actual implementation, this would be replaced with the AI service response.',
        },
      ]);
    }, 1000);

    setPrompt('');
  };

  const suggestions = [
    'Help me create a 5-day Paris itinerary',
    'Suggest activities for a family trip to Tokyo',
    'Optimize my itinerary description for better engagement',
    'Calculate optimal pricing for my package',
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="AI Travel Assistant">
      <div className="h-[600px] flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === 'assistant' ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'assistant'
                    ? 'bg-gray-100'
                    : 'bg-blue-600 text-white'
                }`}
              >
                {message.role === 'assistant' && (
                  <Sparkles className="h-4 w-4 mb-2" />
                )}
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="text-sm bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1"
                onClick={() => setPrompt(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            className="flex-1 rounded-md border border-gray-300 p-2.5"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask me anything..."
          />
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Modal>
  );
}