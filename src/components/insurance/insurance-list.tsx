import { Button } from '@/components/ui/button';
import { Check, Shield, Star } from 'lucide-react';

interface InsuranceListProps {
  plans: any[];
  isLoading: boolean;
}

export function InsuranceList({ plans, isLoading }: InsuranceListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (plans.length === 0) {
    return (
      <div className="text-center py-12">
        <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900">No plans found</h3>
        <p className="text-gray-600">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow ${
            plan.recommended ? 'border-2 border-blue-500' : ''
          }`}
        >
          {plan.recommended && (
            <div className="bg-blue-500 text-white text-center py-2">
              <span className="text-sm font-medium">Recommended Plan</span>
            </div>
          )}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-gray-600">{plan.provider}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">${plan.price}</p>
                <p className="text-sm text-gray-600">per person</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Medical Coverage</p>
                <p className="font-semibold">${plan.coverage.medical.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Trip Cancellation</p>
                <p className="font-semibold">${plan.coverage.cancellation.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Baggage Loss</p>
                <p className="font-semibold">${plan.coverage.baggage.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Travel Delay</p>
                <p className="font-semibold">${plan.coverage.delay.toLocaleString()}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-2">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {plan.features.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-medium">{plan.rating}</span>
                <span className="text-gray-600">({plan.reviews} reviews)</span>
              </div>
              <Button>Select Plan</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}