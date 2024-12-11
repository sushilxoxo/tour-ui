import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ItineraryForm } from '@/components/creators/itinerary-form';
import { AiAssistant } from '@/components/creators/ai-assistant';
import { ItinerarySteps } from '@/components/creators/itinerary-builder/itinerary-steps';
import { AISuggestions } from '@/components/creators/itinerary-builder/ai-suggestions';
import { DestinationInsights } from '@/components/creators/itinerary-builder/destination-insights';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CreatorNewItineraryPage() {
  const [showAiAssistant, setShowAiAssistant] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/creator-dashboard">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Dashboard
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">Create New Itinerary</h1>
          </div>
          <Button onClick={() => setShowAiAssistant(true)}>
            <Sparkles className="h-4 w-4 mr-2" />
            AI Assistant
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ItinerarySteps />
            <ItineraryForm />
          </div>
          <div className="space-y-8">
            <AISuggestions />
            <DestinationInsights />
            <AiAssistant
              isOpen={showAiAssistant}
              onClose={() => setShowAiAssistant(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}