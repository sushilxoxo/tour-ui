import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';

interface Suggestion {
  id: string;
  type: 'activity' | 'restaurant' | 'tip';
  content: string;
  source: string;
}

export function AISuggestions() {
  const [suggestions] = useState<Suggestion[]>([
    {
      id: '1',
      type: 'activity',
      content: 'Consider adding the Louvre Museum early in the morning to avoid crowds',
      source: 'Based on visitor data',
    },
    {
      id: '2',
      type: 'restaurant',
      content: 'Le Cheval d\'Or is highly rated for authentic French cuisine',
      source: 'Recent reviews',
    },
    {
      id: '3',
      type: 'tip',
      content: 'Include a Seine River cruise during sunset for better photos',
      source: 'Creator insights',
    },
  ]);

  return (
    <div className="bg-blue-50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-600" />
          <h3 className="font-medium">AI Suggestions</h3>
        </div>
        <Button size="sm" variant="outline">
          Refresh
        </Button>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-sm mb-2">{suggestion.content}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{suggestion.source}</span>
              <Button size="sm" variant="ghost">
                Add to Itinerary
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}