import { Button } from '@/components/ui/button';
import { Calendar, Plus } from 'lucide-react';

interface ContentEvent {
  id: string;
  title: string;
  type: 'itinerary' | 'blog' | 'social';
  date: string;
  status: 'scheduled' | 'draft';
}

export function ContentCalendar() {
  const events: ContentEvent[] = [
    {
      id: '1',
      title: 'Summer Travel Guide',
      type: 'blog',
      date: '2024-03-25T10:00:00Z',
      status: 'scheduled',
    },
    {
      id: '2',
      title: 'Tokyo Adventure Package',
      type: 'itinerary',
      date: '2024-03-28T15:00:00Z',
      status: 'draft',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'itinerary':
        return 'text-blue-600 bg-blue-50';
      case 'blog':
        return 'text-purple-600 bg-purple-50';
      default:
        return 'text-green-600 bg-green-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Content Calendar</h2>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="divide-y">
        {events.map((event) => (
          <div key={event.id} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium">{event.title}</h3>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getTypeColor(
                      event.type
                    )}`}
                  >
                    {event.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
              </div>
              <Button variant="outline" size="sm">Edit</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}