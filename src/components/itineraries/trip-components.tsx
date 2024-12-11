import { TripComponent } from '@/types/itinerary';
import { Button } from '@/components/ui/button';
import { Car, Hotel, Plane, Map } from 'lucide-react';
import { useState } from 'react';

interface TripComponentsProps {
  components: TripComponent[];
  onComponentChange: (oldComponentId: string, newComponentId: string) => void;
}

export function TripComponents({ components, onComponentChange }: TripComponentsProps) {
  const [expandedComponent, setExpandedComponent] = useState<string | null>(null);
  const [showAlternatives, setShowAlternatives] = useState<string | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'flight':
        return <Plane className="h-5 w-5" />;
      case 'hotel':
        return <Hotel className="h-5 w-5" />;
      case 'transport':
        return <Car className="h-5 w-5" />;
      case 'activity':
        return <Map className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const formatDetail = (key: string, value: string) => {
    return (
      <div key={key} className="flex justify-between text-sm">
        <span className="text-gray-600">{key}:</span>
        <span className="font-medium">{value}</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6">Trip Components</h2>
      <div className="space-y-4">
        {components.map((component) => (
          <div key={component.id} className="border rounded-lg overflow-hidden">
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => setExpandedComponent(
                expandedComponent === component.id ? null : component.id
              )}
            >
              <div className="flex items-center gap-3">
                <div className="text-blue-600">{getIcon(component.type)}</div>
                <div>
                  <h3 className="font-medium">{component.title}</h3>
                  <p className="text-sm text-gray-600">{component.description}</p>
                </div>
              </div>
              <div className="text-lg font-semibold">
                ${component.price.toLocaleString()}
              </div>
            </div>

            {expandedComponent === component.id && (
              <div className="p-4 border-t bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(component.details).map(([key, value]) =>
                    formatDetail(key, value)
                  )}
                </div>

                {component.alternatives && (
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      onClick={() => setShowAlternatives(
                        showAlternatives === component.id ? null : component.id
                      )}
                    >
                      View Alternatives
                    </Button>

                    {showAlternatives === component.id && (
                      <div className="mt-4 space-y-4">
                        {component.alternatives.map((alt) => (
                          <div
                            key={alt.id}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-white"
                          >
                            <div>
                              <h4 className="font-medium">{alt.title}</h4>
                              <p className="text-sm text-gray-600">{alt.description}</p>
                              <div className="mt-2 grid grid-cols-2 gap-4">
                                {Object.entries(alt.details).map(([key, value]) =>
                                  formatDetail(key, value)
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-semibold">
                                ${alt.price.toLocaleString()}
                              </p>
                              <p className="text-sm text-gray-600">
                                {alt.priceDifference > 0 ? '+' : ''}$
                                {alt.priceDifference.toLocaleString()} difference
                              </p>
                              <Button
                                variant="outline"
                                size="sm"
                                className="mt-2"
                                onClick={() => onComponentChange(component.id, alt.id)}
                              >
                                Select
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}