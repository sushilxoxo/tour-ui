import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ItinerarySteps } from './itinerary-steps';
import { AISuggestions } from './ai-suggestions';
import { DestinationInsights } from './destination-insights';
import { BasicInfo } from './sections/basic-info';
import { Components } from './sections/components';
import { DayPlanner } from './sections/day-planner';
import { PricingOptions } from './sections/pricing-options';
import { ReviewPublish } from './sections/review-publish';

interface ItineraryFormData {
  step: number;
  basicInfo: {
    title: string;
    description: string;
    destination: string;
    duration: number;
    coverImage: string | null;
    tags: string[];
  };
  components: {
    flights: any[];
    hotels: any[];
    activities: any[];
    transportation: any[];
  };
  dayPlans: Array<{
    day: number;
    title: string;
    description: string;
    items: Array<{
      time: string;
      type: string;
      title: string;
      description: string;
    }>;
  }>;
  pricing: {
    basePrice: number;
    options: Array<{
      name: string;
      description: string;
      price: number;
    }>;
  };
}

export function ItineraryForm() {
  const [formData, setFormData] = useState<ItineraryFormData>({
    step: 1,
    basicInfo: {
      title: '',
      description: '',
      destination: '',
      duration: 1,
      coverImage: null,
      tags: [],
    },
    components: {
      flights: [],
      hotels: [],
      activities: [],
      transportation: [],
    },
    dayPlans: [],
    pricing: {
      basePrice: 0,
      options: [],
    },
  });

  const handleNext = () => {
    setFormData({ ...formData, step: formData.step + 1 });
  };

  const handleBack = () => {
    setFormData({ ...formData, step: formData.step - 1 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const renderStep = () => {
    switch (formData.step) {
      case 1:
        return (
          <BasicInfo
            data={formData.basicInfo}
            onChange={(basicInfo) => setFormData({ ...formData, basicInfo })}
          />
        );
      case 2:
        return (
          <Components
            data={formData.components}
            onChange={(components) => setFormData({ ...formData, components })}
          />
        );
      case 3:
        return (
          <DayPlanner
            data={formData.dayPlans}
            duration={formData.basicInfo.duration}
            onChange={(dayPlans) => setFormData({ ...formData, dayPlans })}
          />
        );
      case 4:
        return (
          <PricingOptions
            data={formData.pricing}
            onChange={(pricing) => setFormData({ ...formData, pricing })}
          />
        );
      case 5:
        return <ReviewPublish data={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <ItinerarySteps currentStep={formData.step} />
        <form onSubmit={handleSubmit} className="space-y-8">
          {renderStep()}
          <div className="flex justify-between">
            {formData.step > 1 && (
              <Button type="button" variant="outline" onClick={handleBack}>
                Back
              </Button>
            )}
            {formData.step < 5 ? (
              <Button type="button" onClick={handleNext}>
                Next Step
              </Button>
            ) : (
              <Button type="submit">Publish Itinerary</Button>
            )}
          </div>
        </form>
      </div>
      <div className="space-y-8">
        <AISuggestions currentStep={formData.step} />
        <DestinationInsights destination={formData.basicInfo.destination} />
      </div>
    </div>
  );
}