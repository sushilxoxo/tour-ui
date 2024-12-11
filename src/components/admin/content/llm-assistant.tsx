import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';

interface LLMResponse {
  content: string;
  type: 'itinerary' | 'blog' | 'chatbot';
}

export function LLMAssistant() {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState<'itinerary' | 'blog' | 'chatbot'>('itinerary');
  const [isGenerating, setIsGenerating] = useState(false);
  const [response, setResponse] = useState<LLMResponse | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call to LLM
    setTimeout(() => {
      setResponse({
        type: contentType,
        content: 'This is a simulated response from the LLM based on your prompt.',
      });
      setIsGenerating(false);
    }, 2000);
  };

  const promptSuggestions = {
    itinerary: [
      'Create a 5-day Tokyo cultural experience itinerary',
      'Suggest highlights for a Paris romantic getaway',
      'Generate inclusions for a luxury Bali retreat',
    ],
    blog: [
      'Write an introduction about hidden gems in Kyoto',
      'Create an outline for a travel photography tips article',
      'Generate SEO-optimized headings for a food guide',
    ],
    chatbot: [
      'Write a response for booking cancellation inquiries',
      'Create follow-up questions for itinerary recommendations',
      'Generate a helpful response for pricing questions',
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold">AI Content Assistant</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content Type
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['itinerary', 'blog', 'chatbot'] as const).map((type) => (
              <button
                key={type}
                className={`p-2 text-sm font-medium rounded-md ${
                  contentType === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setContentType(type)}
                type="button"
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prompt
          </label>
          <textarea
            className="w-full rounded-md border border-gray-300 p-2.5"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you want to create..."
          />
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-2">Try these prompts:</p>
          <div className="space-y-2">
            {promptSuggestions[contentType].map((suggestion, index) => (
              <button
                key={index}
                className="w-full text-left text-sm p-2 rounded-md hover:bg-gray-50 text-gray-600"
                onClick={() => setPrompt(suggestion)}
                type="button"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={handleGenerate}
          disabled={isGenerating || !prompt.trim()}
          className="w-full"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          {isGenerating ? 'Generating...' : 'Generate Content'}
        </Button>

        {response && (
          <div className="mt-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="whitespace-pre-wrap">{response.content}</p>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" size="sm">
                Copy
              </Button>
              <Button variant="outline" size="sm">
                Refine
              </Button>
              <Button size="sm">
                Apply to {response.type.charAt(0).toUpperCase() + response.type.slice(1)}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}