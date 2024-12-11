import { Activity, Coffee, Hotel, MapPin, Utensils } from 'lucide-react';

interface TripItineraryProps {
  itinerary: any[];
}

export function TripItinerary({ itinerary }: TripItineraryProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'accommodation':
        return <Hotel className="h-5 w-5" />;
      case 'transport':
        return <MapPin className="h-5 w-5" />;
      case 'activity':
        return <Activity className="h-5 w-5" />;
      case 'meal':
        return <Utensils className="h-5 w-5" />;
      default:
        return <MapPin className="h-5 w-5" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Trip Itinerary</h2>
      <div className="space-y-8">
        {itinerary.map((day, index) => (
          <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-100 last:border-l-0">
            <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600" />
            <div className="mb-4">
              <span className="text-sm font-medium text-blue-600">Day {day.day}</span>
              <h3 className="text-lg font-semibold">{day.title}</h3>
              <p className="text-sm text-gray-600">{day.date}</p>
            </div>
            {day.items.map((item: any, itemIndex: number) => (
              <div key={itemIndex} className="flex items-start gap-3 mt-4">
                <div className="text-blue-600">{getIcon(item.type)}</div>
                <div>
                  <p className="font-medium">{item.time}</p>
                  <p className="text-gray-600">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}