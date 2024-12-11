import { Award, Star, Trophy, Users } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  total: number;
  reward: string;
  unlocked: boolean;
}

export function CreatorAchievements() {
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Rising Star',
      description: 'Get your first 5 five-star reviews',
      icon: <Star className="h-6 w-6" />,
      progress: 3,
      total: 5,
      reward: '100 Creator Points',
      unlocked: false,
    },
    {
      id: '2',
      title: 'Travel Expert',
      description: 'Create 10 successful itineraries',
      icon: <Trophy className="h-6 w-6" />,
      progress: 7,
      total: 10,
      reward: 'Expert Badge + 500 Creator Points',
      unlocked: false,
    },
    {
      id: '3',
      title: 'Community Leader',
      description: 'Help 100 travelers book their trips',
      icon: <Users className="h-6 w-6" />,
      progress: 82,
      total: 100,
      reward: 'Featured Creator Status',
      unlocked: false,
    },
    {
      id: '4',
      title: 'Elite Creator',
      description: 'Earn $10,000 in commissions',
      icon: <Award className="h-6 w-6" />,
      progress: 7500,
      total: 10000,
      reward: 'Elite Badge + Priority Support',
      unlocked: false,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`border rounded-lg p-4 ${
              achievement.unlocked ? 'bg-blue-50 border-blue-200' : 'bg-white'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-2 rounded-lg ${
                achievement.unlocked ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{achievement.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-blue-600 rounded-full h-2"
                    style={{
                      width: `${(achievement.progress / achievement.total) * 100}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {achievement.progress} / {achievement.total}
                  </span>
                  <span className="text-blue-600 font-medium">{achievement.reward}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}