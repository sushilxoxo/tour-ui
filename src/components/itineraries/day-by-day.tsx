import { Activity } from '@/types/itinerary';
import { Coffee, Hotel, MapPin, Utensils } from 'lucide-react';

interface DayByDayProps {
  activities: Activity[];
}

export function DayByDay({ activities }: DayByDayProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'accommodation':
        return <Hotel className="h-5 w-5" />;
      case 'activity':
        return <MapPin className="h-5 w-5" />;
      case 'breakfast':
        return <Coffee className="h-5 w-5" />;
      case 'dinner':
        return <Utensils className="h-5 w-5" />;
      default:
        return <MapPin className="h-5 w-5" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6">Day by Day Itinerary</h2>
      <div className="space-y-8">
        {activities.map((activity, index) => (
          <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-100 last:border-l-0">
            <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600" />
            <div className="mb-2">
              <span className="text-sm font-medium text-blue-600">Day {activity.day}</span>
              <h3 className="text-lg font-semibold">{activity.title}</h3>
            </div>
            {activity.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-start gap-3 mt-4">
                <div className="text-blue-600 mt-1">{getIcon(item.type)}</div>
                <div>
                  <p className="font-medium">{item.time} - {item.title}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}