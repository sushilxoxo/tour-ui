import { Gift, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  image: string;
  claimed: boolean;
}

export function CreatorRewards() {
  const rewards: Reward[] = [
    {
      id: '1',
      title: 'Premium Analytics',
      description: '1 month of advanced analytics and insights',
      points: 1000,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      claimed: false,
    },
    {
      id: '2',
      title: 'Featured Placement',
      description: '1 week featured spot on homepage',
      points: 2000,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      claimed: false,
    },
    {
      id: '3',
      title: 'Creator Workshop',
      description: 'Exclusive access to expert workshop',
      points: 3000,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      claimed: true,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Rewards Store</h2>
          <p className="text-gray-600">Redeem your creator points</p>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-yellow-400" />
          <span className="font-bold">2,750 points</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="border rounded-lg overflow-hidden group"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={reward.image}
                alt={reward.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-1">{reward.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Gift className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">{reward.points} points</span>
                </div>
                <Button
                  size="sm"
                  variant={reward.claimed ? 'outline' : 'default'}
                  disabled={reward.claimed}
                >
                  {reward.claimed ? 'Claimed' : 'Redeem'}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}