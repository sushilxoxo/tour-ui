import { Button } from '@/components/ui/button';
import { Check, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Step {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export function ItinerarySteps() {
  const [steps] = useState<Step[]>([
    {
      id: 'basics',
      title: 'Basic Information',
      description: 'Title, description, and overview',
      completed: false,
    },
    {
      id: 'components',
      title: 'Trip Components',
      description: 'Flights, hotels, and activities',
      completed: false,
    },
    {
      id: 'itinerary',
      title: 'Day by Day',
      description: 'Detailed daily schedule',
      completed: false,
    },
    {
      id: 'pricing',
      title: 'Pricing & Options',
      description: 'Set prices and variations',
      completed: false,
    },
    {
      id: 'review',
      title: 'Review & Publish',
      description: 'Final checks and settings',
      completed: false,
    },
  ]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start gap-4">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                step.completed
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {step.completed ? (
                <Check className="h-5 w-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                <Button
                  variant={step.completed ? 'outline' : 'default'}
                  size="sm"
                  className="shrink-0"
                >
                  {step.completed ? 'Edit' : 'Start'}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              {index < steps.length - 1 && (
                <div className="ml-4 mt-4 border-l-2 border-gray-100 h-8" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}