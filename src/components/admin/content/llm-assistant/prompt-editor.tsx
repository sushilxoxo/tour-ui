import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';

interface PromptFormData {
  prompt: string;
  context: string;
  temperature: number;
  maxTokens: number;
  stopSequences: string[];
}

export function PromptEditor() {
  const [formData, setFormData] = useState<PromptFormData>({
    prompt: '',
    context: '',
    temperature: 0.7,
    maxTokens: 150,
    stopSequences: [],
  });

  const [response, setResponse] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call to LLM
    setTimeout(() => {
      setResponse('This is a simulated response from the LLM.');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6">LLM Assistant</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prompt
            </label>
            <textarea
              className="w-full rounded-md border border-gray-300 p-2.5"
              rows={4}
              value={formData.prompt}
              onChange={(e) =>
                setFormData({ ...formData, prompt: e.target.value })
              }
              placeholder="Enter your prompt..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Context
            </label>
            <textarea
              className="w-full rounded-md border border-gray-300 p-2.5"
              rows={3}
              value={formData.context}
              onChange={(e) =>
                setFormData({ ...formData, context: e.target.value })
              }
              placeholder="Additional context for the LLM..."
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Temperature ({formData.temperature})
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                className="w-full"
                value={formData.temperature}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    temperature: parseFloat(e.target.value),
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Tokens
              </label>
              <input
                type="number"
                className="w-full rounded-md border border-gray-300 p-2.5"
                value={formData.maxTokens}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    maxTokens: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stop Sequences
            </label>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                className="flex-1 rounded-md border border-gray-300 p-2.5"
                placeholder="Press Enter to add"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const value = (e.target as HTMLInputElement).value.trim();
                    if (value && !formData.stopSequences.includes(value)) {
                      setFormData({
                        ...formData,
                        stopSequences: [...formData.stopSequences, value],
                      });
                      (e.target as HTMLInputElement).value = '';
                    }
                  }
                }}
              />
              {formData.stopSequences.map((sequence, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {sequence}
                  <button
                    type="button"
                    className="hover:text-gray-900"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        stopSequences: formData.stopSequences.filter(
                          (_, i) => i !== index
                        ),
                      });
                    }}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            {isGenerating ? 'Generating...' : 'Generate Response'}
          </Button>

          {response && (
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Generated Response
              </label>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="whitespace-pre-wrap">{response}</p>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Copy
                </Button>
                <Button variant="outline" size="sm">
                  Use as Template
                </Button>
                <Button size="sm">Apply to Content</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}