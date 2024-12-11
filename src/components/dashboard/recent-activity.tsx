import { Clock } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      type: 'booking',
      title: 'New booking for Paris Getaway',
      time: '2 hours ago',
      amount: '$2,499',
    },
    {
      type: 'review',
      title: '5-star review received',
      time: '4 hours ago',
      message: '"Amazing experience, highly recommended!"',
    },
    {
      type: 'payout',
      title: 'Monthly payout processed',
      time: '1 day ago',
      amount: '$4,850',
    },
    {
      type: 'milestone',
      title: 'Reached 100 bookings!',
      time: '2 days ago',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <div>
              <p className="font-medium">{activity.title}</p>
              {activity.amount && (
                <p className="text-green-600 font-medium">{activity.amount}</p>
              )}
              {activity.message && (
                <p className="text-gray-600 text-sm italic">{activity.message}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}