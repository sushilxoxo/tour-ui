import { Clock } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      id: '1',
      type: 'booking',
      title: 'Booked Paris Getaway',
      time: '2 days ago',
      details: 'Apr 15 - Apr 20, 2024',
    },
    {
      id: '2',
      type: 'review',
      title: 'Left a review for Bali Adventure',
      time: '1 week ago',
      details: '5 stars - "Amazing experience!"',
    },
    {
      id: '3',
      type: 'save',
      title: 'Saved Swiss Alps Adventure',
      time: '2 weeks ago',
      details: 'Added to wishlist',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Recent Activity</h2>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className="flex-shrink-0">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <div>
              <p className="font-medium">{activity.title}</p>
              <p className="text-sm text-gray-600">{activity.details}</p>
              <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}