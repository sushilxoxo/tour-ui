import { Button } from '@/components/ui/button';
import { Plus, Users } from 'lucide-react';

interface Segment {
  id: string;
  name: string;
  criteria: string;
  users: number;
  lastUpdated: string;
}

export function UserSegments() {
  const segments: Segment[] = [
    {
      id: '1',
      name: 'Frequent Travelers',
      criteria: 'Booked > 3 trips in last 6 months',
      users: 2450,
      lastUpdated: '2024-03-20T10:30:00Z',
    },
    {
      id: '2',
      name: 'Luxury Seekers',
      criteria: 'Avg. booking value > $3000',
      users: 1280,
      lastUpdated: '2024-03-19T15:45:00Z',
    },
    {
      id: '3',
      name: 'New Users',
      criteria: 'Registered in last 30 days',
      users: 3420,
      lastUpdated: '2024-03-18T09:15:00Z',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">User Segments</h2>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Segment
          </Button>
        </div>
      </div>

      <div className="divide-y">
        {segments.map((segment) => (
          <div key={segment.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{segment.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{segment.criteria}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">
                  {segment.users.toLocaleString()} users
                </p>
                <p className="text-sm text-gray-600">
                  Updated {new Date(segment.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}